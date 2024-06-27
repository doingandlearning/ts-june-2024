{
  // Exercise 1: the return type should be the same as the input type

  const returnWhatIPassIn = <T>(t: T) => {
    return t;
  };

  const one = returnWhatIPassIn(1);
  const kevin = returnWhatIPassIn("kevin");
}

{
  // Exercise 2: the return type should be the input type but only a string
  const returnWhatIPassIn = <T extends string>(t: T) => t;
  // const returnWhatIPassIn = (t: string) => t;

  const one = returnWhatIPassIn(1); // should error
  const kevin = returnWhatIPassIn("kevin");

  //

  // function formatedUser<T extends User> (input: T) {

  // }
}

{
  // Exercise 3: Return an object with the same keys as the input object
  // with the correct types.
  function returnBothOfWhatIPassIn<T, U>(a: T, b: U) {
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
  const returnBothOfWhatIPassIn = <T, U>(params: { a: T; b: U }) => {
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
  // Exercise 5
  interface User {
    username: string;
    email: string;
  }

  function filterItems<Type>(
    arr: Type[],
    predicate: (item: Type) => boolean
  ): Type[] {
    return arr.filter(predicate);
  }

  // Test cases
  const mixedArray: (number | string | User)[] = [
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
    (item) => typeof item === "object" && "username" in item && "email" in item
  );

  // Output the results
  console.log("Numbers: ", numbers); // Expected: [1, 2]
  console.log("Strings: ", strings); // Expected: ['hello', 'world']
  console.log("Users: ", users); // Expected: [{ username: 'kevin', email: 'kevin@kevincunningham.co.uk' }]
}

{
  // Exercise 5 (alternative)

  interface User {
    username: string;
    email: string;
  }

  function filterItems<Type, PredicateType extends Type>(
    arr: Type[],
    predicate: (item: Type) => item is PredicateType
  ): PredicateType[] {
    return arr.filter(predicate) as PredicateType[];
  }

  // Test cases
  const mixedArray: (number | string | User)[] = [
    1,
    "hello",
    { username: "kevin", email: "kevin@kevincunningham.co.uk" },
    2,
    "world",
  ];

  const numbers = filterItems(
    mixedArray,
    (item): item is number => typeof item === "number"
  );
  const strings = filterItems(
    mixedArray,
    (item): item is string => typeof item === "string"
  );
  const users = filterItems(
    mixedArray,
    (item): item is User => typeof item === "object" && "username" in item
  );

  // Output the results
  console.log("Numbers: ", numbers); // Expected: [1, 2]
  console.log("Strings: ", strings); // Expected: ['hello', 'world']
  console.log("Users: ", users); // Expected: [{ username: 'kevin', email: 'kevin@kevincunningham.co.uk' }]
}
