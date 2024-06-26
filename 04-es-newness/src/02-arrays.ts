const nums: Array<number> = [1, 2, 3, 4];

const newArray = nums
  .map<boolean>((num) => num > 3)
  .map<number>((num) => (true ? 1 : 0));
// nums.reduce();
// nums.filter();

const newNums = [...nums]; // assignment by value/by reference??
newNums.push(7);

console.log(nums);
console.log(newNums);

const people = [{ name: "Izzy" }, { name: "Jessica" }];
const newPeople = [...people];
newPeople[0].name = "Mo";

console.log(people);
console.log(newPeople);

const betterNewPeople = JSON.parse(JSON.stringify(people));
betterNewPeople[0].name = "Izzy";

console.log(people);
console.log(newPeople);
console.log(betterNewPeople);

const evenBetterNewPeople = structuredClone(people);
