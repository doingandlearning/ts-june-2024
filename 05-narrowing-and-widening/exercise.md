# Practice Lab - TypeScript Inference and Type Annotations

In this module, we explored TypeScript's type inference system and the appropriate use of explicit type annotations. Each exercise is designed to enhance your understanding of when and how to use TypeScript's type system effectively. Follow the instructions for each task and ensure to run and compile your code to see the results.

---

## Exercise 1: Basic Type Inference

**Objective:** Understand and practice basic type inference in TypeScript.

**Tasks:**

1. Define a variable `a` with an explicit type annotation of `boolean` and assign it a value of `true`.
2. Define a variable `b` without an explicit type annotation and assign it a value of `42`.
3. Discuss why TypeScript can infer the type of `b` but an explicit type is provided for `a`.

---

## Exercise 2: Using Type Inference with Complex Objects

**Objective:** Practice using type inference with complex objects.

**Tasks:**

1. Define an object `book` with explicit type annotations for each property, including nested properties.
2. Create an interface `Book` and refactor the object definition using this interface.
3. Assign values to `book` and log the properties to the console.

---

## Exercise 3: Function Return Types

**Objective:** Learn to use type inference and explicit return types in functions.

**Tasks:**

1. Define a function `multiply` that takes an array of numbers and returns an array with each element multiplied by 2.
2. Explain why TypeScript infers the return type correctly.
3. Add an explicit return type to the `multiply` function.

---

## Exercise 4: Discriminated Unions

**Objective:** Understand and use discriminated unions in TypeScript.

**Tasks:**

1. Define interfaces `SuccessResponse` and `ErrorResponse` with a common property `status`.
2. Create a type alias `ApiResponse` that can be either `SuccessResponse` or `ErrorResponse`.
3. Write a function `handleResponse` that processes the `ApiResponse` using a switch statement.
4. Add a default case to the switch statement to handle unexpected response types.

---

## Exercise 5: Excess Property Checks

**Objective:** Understand and use excess property checks in TypeScript.

**Tasks:**

1. Define an interface `Car` with properties `make`, `model`, and `year`.
2. Create an object `car` that conforms to the `Car` interface.
3. Assign additional properties to the `car` object and observe TypeScript's response.

---

## Exercise 6: Type Guards

**Objective:** Practice using type guards to refine types.

**Tasks:**

1. Define a variable `value` of type `unknown` and assign it a value.
2. Use a type guard to check if `value` is a string and log it to the console if true.
3. Use another type guard to check if `value` is a number and log it to the console if true.

