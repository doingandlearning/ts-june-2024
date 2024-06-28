import store from "./store-async";
import { describe, test, expect } from "vitest";

describe("store function", () => {
  describe("Successful storage", () => {
    test("should return an object with an id when given a Buffer", async () => {
      const buffer = Buffer.from("Test data");
      const result = await store(buffer);
      expect("id" in result).toBe(true);
      expect(typeof result.id).toEqual("string");
      expect(result.id.length).toEqual(4);
    });
  });

  describe("Input validation", () => {
    test("should throw an error when the input is not a Buffer", async () => {
      const input = "Not a buffer";
      try {
        await store(input as any); // Type assertion to bypass TypeScript type checking
        throw new Error("store did not throw an error with invalid input"); // Fail test if no error thrown
      } catch (error) {
        if (error instanceof Error) {
          expect(error).toBeInstanceOf(Error);
          expect(error.message).toEqual("input must be a buffer");
        }
      }
    });
  });

  describe("Asynchronous operation", () => {
    test("should take at least 300 ms to return a result", async () => {
      const buffer = Buffer.from("Test data");
      const startTime = Date.now();
      await store(buffer);
      const endTime = Date.now();
      expect(endTime - startTime).toBeGreaterThanOrEqual(300);
    });
  });
});
