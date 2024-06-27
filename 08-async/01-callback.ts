// callback => code to execute, function to invoke
import fs from "node:fs";

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

// CALLBACK HELL!!!!
// PYRAMID OF DOOM!
fs.readFile("user.json", "utf-8", (error: Error | null, userData: string) => {
  if (error) {
    console.log(error);
    return;
  }
  const user = JSON.parse(userData) as User;
  fs.readFile(
    "regions.json",
    "utf-8",
    (error: Error | null, regionsData: string) => {
      if (error) {
        console.log(error);
        return;
      }
      const regions = JSON.parse(regionsData) as Region[];
      fs.readFile(
        "news.json",
        "utf-8",
        (error: Error | null, newsData: string) => {
          if (error) {
            console.log(error);
            return;
          }
          const allNews = JSON.parse(newsData) as News[];

          const userHeadlines = regions[user.region] as string[];
          const userNews = allNews.filter((article) =>
            userHeadlines.includes(article.id)
          );

          userNews.forEach((news) => {
            console.log(news.headline);
            console.log(news.content);
            console.log("-----");
          });
        }
      );
    }
  );
});
