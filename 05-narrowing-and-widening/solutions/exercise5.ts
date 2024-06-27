interface Car {
  make: string;
  model: string;
  year: number;
}

const car: Car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
  // color: "blue", // Uncomment this line and see TypeScript's response
};

console.log(car);
