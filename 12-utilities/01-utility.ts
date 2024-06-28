// Already have some type ... want some transformation ...

const promise = async () => 1234;

const result = promise();

type valueOfResult = Awaited<typeof result>; // unwrap a promise
type valueOfPromise = Awaited<ReturnType<typeof promise>>; // unwrap a promise

console.log(typeof 1);
console.log(typeof "Hello");

type NotificationSettings = "email" | "browser";
type FilterSettings = Extract<
  NotificationSettings,
  "email" | "sms" | "whatsapp"
>;

type FilterSettings2 = Exclude<
  "email" | "sms" | "whatsapp",
  NotificationSettings
>;

interface Todo {
  title: string;
  description?: string;
  completed?: boolean;
  dueDate?: Date;
}

type FullTodo = Required<Todo>;
type OptionalTodo = Partial<Todo>;

interface User {
  name: string;
  todos: Required<Todo[]>;
}

type MyReturnType = string;

type Regions = "SE" | "Scotland" | "Wales" | "NE" | "NI" | "SW";

interface RegionType {
  [key: string]: { weather: string; population: number }; //
}

type RegionRecord = Record<Regions, { weather: string; population: number }>;

const regionData: RegionRecord = {
  SW: {
    population: 18_000_000,
    weather: "sunny",
  },
  Germany: { population: 18_000_000, weather: "sunny" },
};
