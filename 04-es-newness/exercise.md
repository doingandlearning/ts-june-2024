# Exercise: ES6+ Features

## Goal

Your task is to apply your knowledge of the ES6+ features to solve the following exercises. This will help you get hands-on experience with these concepts and reinforce your understanding.

## 1. Default Parameters & Template Literals

### Description
Create a function to greet a user. If no name is provided, it should default to 'Guest'. The greeting should be done using template literals.

### Instructions
- Define a function `greetUser`.
- The function should take a name parameter with a default value of 'Guest'.
- Return a greeting message using template literals.

**Example:**
```typescript
greetUser(); // "Hello, Guest!"
greetUser("John"); // "Hello, John!"
```

## 2. Object Literals

### Description
Given a list of variables `brand`, `model`, `year`, and `color`, create a car object without repeating the property names.

### Instructions
- Define variables: `brand`, `model`, `year`, and `color`.
- Create an object `car` using shorthand property names.

**Example:**
```typescript
const brand = "Toyota";
const model = "Camry";
const year = 2021;
const color = "Blue";

const car = // Your solution here.
```

## 3. Arrow Functions

### Description
Convert a list of regular function expressions to arrow functions.

### Instructions
Given the following list of functions:

```typescript
function add(a, b) {
    return a + b;
}

function square(x) {
    return x * x;
}
```

Convert them to arrow functions.

## 4. let/const

### Description
Given a piece of code with `var`, identify and fix potential issues by converting them to `let` or `const`.

### Instructions
Review the following code:

```typescript
var number = 5;
var multiplier = 10;
var product = number * multiplier;
```

Refactor the code using `let` and `const` where appropriate.

Sure, here's an exercise focused on practicing and exploring the array `map` method, a powerful ES6+ feature:

## 5. Map Function

### Description
Demonstrate the use of the `map` method by transforming an array of objects representing books. Each book object has a `title` and a `year` of publication. The goal is to use `map` to create a new array of strings, where each string is a summary of the book's information.

### Instructions
- Define an array of objects, where each object represents a book with properties `title` and `year`.
- Use the `map` method to transform this array into an array of strings.
- Each string should be in the format: `"Title: [title], Published: [year]"`.

**Example:**
```typescript
const books = [
    { title: "The Great Gatsby", year: 1925 },
    { title: "To Kill a Mockingbird", year: 1960 },
    // Add more books
];

// Use the map method
const bookSummaries = // Your solution here.

console.log(bookSummaries);
// Expected Output:
// [
//   "Title: The Great Gatsby, Published: 1925",
//   "Title: To Kill a Mockingbird, Published: 1960",
//   // More summaries
// ]
```

### Additional Challenge
- Enhance the function to include the author's name and a boolean `isClassic` indicating if the book is considered a classic (published before 1970).
- Modify the `map` function to include this additional information in the summary.

This exercise will help students understand how to use the `map` method to transform arrays in a functional programming style. The additional challenge introduces conditional logic within the `map` method and handling more complex transformations.

---

## 6. Generators

### Description
Create a generator function that yields the first `n` prime numbers.

### Instructions
- Define a generator function `generatePrimes`.
- This function should take a parameter `n` and yield the first `n` prime numbers.

**Example:**
```typescript
const primes = generatePrimes(5);
console.log(primes.next().value); // 2
console.log(primes.next().value); // 3
```

## 7. Iterators

### Description
Given an object representing student grades, iterate over them and print names of students who have scored more than 90%.

### Instructions
Consider the following student grades:

```typescript
const studentGrades = {
    "John": 85,
    "Jane": 92,
    "Jim": 78,
    "Jill": 95
};
```

Using an iteration method, print the names of students who have scored more than 90%.

## 8. Bonus - Destructuring & Spread/Rest Operator

### Description
Given an array of numbers, write a function that takes the array and returns an object with the following properties: `max`, `min`, `sum`, and `average`. Use destructuring and the spread operator.

### Instructions
- Define a function `analyzeNumbers`.
- The function should take an array of numbers.
- It should return an object with properties: `max`, `min`, `sum`, and `average`.

**Example:**
```typescript
const nums = [10, 20, 30, 40, 50];
const analysis = analyzeNumbers(nums);
console.log(analysis);
// {
//   max: 50,
//   min: 10,
//   sum: 150,
//   average: 30
// }
```

Good luck!