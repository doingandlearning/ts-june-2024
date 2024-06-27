{
  // Exercise 1: the return type should be the same as the input type

  const returnWhatIPassIn = (t: unknown) => {
    return t;
  };

  const one = returnWhatIPassIn(1);
  const kevin = returnWhatIPassIn("kevin");
}

{
  // Exercise 2: the return type should be the input type but only a string
  const returnWhatIPassIn = (t: unknown) => t;

  const one = returnWhatIPassIn(1); // should error
  const kevin = returnWhatIPassIn("kevin");
}

{
  // Exercise 3: Return an object with the same keys as the input object
  // with the correct types.
  function returnBothOfWhatIPassIn(a: unknown, b: unknown) {
    return {
      a,
      b,
    };
  }

  const result = returnBothOfWhatIPassIn("a", 1); // Type of result should be
  // {
  //  a: string,
  //  b: number,
  // }
}

{
  // Exercise 4: Return an object which extracts a and b from the object passed
  // in maintaining the types.
  const returnBothOfWhatIPassIn = (params: { a: unknown; b: unknown }) => {
    return {
      first: params.a,
      second: params.b,
    };
  };

  const result = returnBothOfWhatIPassIn({
    a: "a",
    b: 1,
  });
}

{
  // Exercise 5: Add types to this function so that the types of
  // the uses in the test cases is correct and not any.

  function filterItems<T>(arr: T[], predicate: (item: T) => boolean) {
    return arr.filter(predicate);
  }

  // Test cases
  const mixedArray = [
    1,
    "hello",
    { username: "kevin", email: "kevin@kevincunningham.co.uk" },
    2,
    "world",
  ];

  const numbers = filterItems(mixedArray, (item) => typeof item === "number");
  const strings = filterItems(mixedArray, (item) => typeof item === "string");
  const users = filterItems(
    mixedArray,
    (item) => item && item.username && item.email
  );

  // Output the results
  console.log("Numbers: ", numbers); // Expected: [1, 2]
  console.log("Strings: ", strings); // Expected: ['hello', 'world']
  console.log("Users: ", users); // Expected: [{ username: 'kevin', email: 'kevin@kevincunningham.co.uk' }]
}
