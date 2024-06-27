import fs from "node:fs/promises";
// Promise => food!
//    Pending => work is being done! (AbortController)
//    Settled
// => Resolved
// => Rejected

interface User {
  name: string;
  age: number;
  region: string;
}

type Regions = "NI" | "Scotland" | "SE" | "South" | "North";
// Dictionary type
interface Region {
  [region: string]: Array<string>;
}

interface News {
  id: string;
  headline: string;
  content: string;
}
console.log("Start running the promise ... ");
const promise = new Promise((resolve, reject) => {
  // do some work!
  setTimeout(() => {
    if (Math.random() > 0.5) {
      reject(new Error("Bad luck!"));
    } else {
      resolve("Well done!");
    }
  }, 300);
})
  .then<void>((result) => console.log(result))
  .catch((error) => console.log(error));

console.log(promise);

const user: Promise<User> = fs
  .readFile("user.json", "utf8")
  .then((data: string) => JSON.parse(data));

const regions: Promise<Region> = fs
  .readFile("regions1.json", "utf8")
  .then((data: string) => JSON.parse(data));

const allNews: Promise<News[]> = fs
  .readFile("news.json", "utf8")
  .then((data: string) => JSON.parse(data));

console.log(user);
