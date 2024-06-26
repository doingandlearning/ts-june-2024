type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; sideLength: number }
  | { kind: "triangle"; base: number; height: number };

function assertNever(x: never): never {
  throw new Error("Unexpected object: " + x);
}

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius * shape.radius;
    case "square":
      return shape.sideLength * shape.sideLength;
    case "triangle":
      return 0.5 * shape.base * shape.height;
    default:
      return assertNever(shape); // This will ensure all cases are handled
  }
}

// Example usage
const myShape: Shape = { kind: "circle", radius: 10 };
console.log(getArea(myShape)); // Output: 314.159...

function fail(message: string): never {
  throw new Error(message);
}

function getLength(value: string | null): number {
  if (value === null) {
    return fail("Value cannot be null");
  }
  return value.length;
}

// Example usage
try {
  console.log(getLength(null)); // This will throw an error
} catch (error) {
  console.error(error.message); // Output: Value cannot be null
}
