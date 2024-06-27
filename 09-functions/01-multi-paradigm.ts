// class Test {}
// const myTest = new Test();
// console.log(typeof myTest);

// Functions being first class
// - Haskell

// 1. Immutability and Pure functions (no side effects)
// input -> output
// no side effects

const validEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// console.log(validEmail("kevin@kevincunningham.co.uk"));
// console.log(validEmail("kevin.cunningham@bbc.co.uk"));

// 2. Higher-Order Functions
//   - One or more of the arguments is a function
//   - it returns a function
interface Person {
  name: string;
  id: number;
}

const userArray: Person[] = [
  { name: "Laura", id: 0 },
  { name: "Gary", id: 1 },
  { name: "Lily", id: 2 },
];

console.log(userArray.map((people) => people.name.toUpperCase()));

function userFactory(company) {
  let id = 1;
  return (name) => {
    return {
      id: id++,
      name,
      company,
    };
  };
}

const bbcUser = userFactory("BBC");
const new1 = bbcUser("James");
const new2 = bbcUser("Luke");

console.log(new1, new2);

// 3. Composition and Composability

// fluent api

console.log(
  userArray
    .filter((item) => item.name.includes("L"))
    .map((item) => item.name.toUpperCase())
);
