import { describe, test } from "vitest";
import add from "./add";

// Exercise 1
describe("Test that add returns the correct result from two numbers", () => {
  test("should return the sum of two numbers", () => {
    // Hint: Call the add function with two positive numbers and check if the result is their sum.
  });
});

// Exercise 2
describe("Test that the add works with negative numbers", () => {
  test("should return the sum of two numbers when one is negative", () => {
    // Hint: Call the add function with one positive and one negative number. Verify if the result is the correct sum.
  });

  test("should return the sum of two numbers when both are negative", () => {
    // Hint: Call the add function with two negative numbers. Check if the result is the sum of these numbers.
  });
});

// Exercise 3
describe("Test that there will be an error if you pass in non-numbers", () => {
  test("should throw an error when one of the arguments is not a number", () => {
    // Hint: Call the add function with a non-number (like a string) as one of the arguments. Expect an error to be thrown.
  });
  test("should throw an error when both arguments are not numbers", () => {
    // Hint: Call the add function with both arguments as non-numbers (like strings). An error should be thrown.
  });
});
