function multiply(nums: number[]): number[] {
  return nums.map((x) => x * 2);
}

const result = multiply([1, 2, 3, 4]);
console.log(result);

export {};
