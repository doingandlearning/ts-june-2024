export function add(num1: number, num2: number) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new TypeError("Both parameters should be numbers.");
  }
  return num1 + num2;
}
