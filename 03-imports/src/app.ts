import { toUpperCase } from "./stringUtils"; // ESM

console.log(toUpperCase("i'm still working!"));
// console.log(module); // This only exists in CommonJS

async function loadUpperCaseModule() {
  const strings = await import("./stringUtils");
  console.log(strings.toUpperCase("My new string"));
}

loadUpperCaseModule();
