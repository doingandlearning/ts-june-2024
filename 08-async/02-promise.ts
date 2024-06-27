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

const userPromise: Promise<User> = fs
  .readFile("user.json", "utf8")
  .then((data: string) => JSON.parse(data));

const regionsPromise: Promise<Region> = fs
  .readFile("regions.json", "utf8")
  .then((data: string) => JSON.parse(data));

const allNewsPromise: Promise<News[]> = fs
  .readFile("news1.json", "utf8")
  .then((data: string) => JSON.parse(data));

// Promise.all([userPromise, regionsPromise, allNewsPromise]).then(
//   ([user, regions, allNews]) => {
//     const userHeadlines = regions[user.region];
//     const userNews = allNews.filter((article) =>
//       userHeadlines.includes(article.id)
//     );

//     userNews.forEach((news) => {
//       console.log(news.headline);
//       console.log(news.content);
//       console.log("-----");
//     });
//   }
// );

Promise.allSettled([userPromise, regionsPromise, allNewsPromise]).then(
  (responses) => {
    console.log(responses);
    // What will i do with the errored results?
    console.log(
      responses.map((response) => {
        if (response.status === "rejected") {
          return "Something went wrong.";
        } else {
          return response.value;
        }
      })
    );
    // What will i do with the successful results?
    const successful = responses.filter(
      (response) => response.status === "fulfilled"
    );
  }
);
