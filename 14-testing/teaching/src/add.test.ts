import { add } from "./add";
import { describe, test, expect } from "vitest"; // this automatic in Jest

describe("Happy path", () => {
  test("adds numbers correctly", () => {
    // Arrange - Given
    // Act - When
    const result = add(2, 3);
    // Assert - Then
    expect(result).toBe(5);
    expect(result).to.be.equal(5);
  });
});

test("error if i try to add non-numbers", () => {
  const result = () => add(true as any, {} as any); // Opting out of the type system!
  // Throwing!!
  expect(result).toThrow();
  expect(() => add(true as any, {} as any)).toThrow(); // If it will throw ..

  try {
    add(true as any, {} as any);
  } catch (error) {
    expect(error instanceof TypeError).toBe(true);
  }
});
