// interface Option<Data> {
//   error: Error | null;
//   result: Data | null;
// }

// You can also describe exceptions using special-purpose data types. This
// approach has some downsides compared to returning unions of values and errors
// (notably, intero‐ perability with code that doesn’t use these data types), but
// it does give you the ability to chain operations over possibly errored
// computations.

// The Option type comes to us from languages like Haskell, OCaml, Scala, and Rust.
// The idea is that instead of returning a value, you return a container that
// may or may not have a value in it.

// Note that the Try, Option, and Either data types don’t come built into JavaScript
// environments the same way that Array, Error, Map, or Promise are. If you want
// to use these types, you’ll have to find implementations on NPM, or write them yourself.

function ask() {
  return prompt("When is your birthday?") || "";
}

function parse(birthday: string): Date[] {
  let date = new Date(birthday);
  if (!isValid(date)) {
    return [];
  }
  return [date];
}
let date = parse(ask());
date.map((_) => _.toISOString()).forEach((_) => console.info("Date is", _));

// What if there are multiple levels of options?

function askA() {
  let result = prompt("When is your birthday?");
  if (result === null) {
    return [];
  }
  return [result];
}

// Doesn't work becuase parse is now receiving an array and returning Date[][]
askA()
  .map(parse)
  .map((date) => date.toISOString())
  // Error TS2339: Property 'toISOString' does not exist on type 'Date[]'.
  .forEach((date) => console.info("Date is", date));

// need to flatten!
function flatten<T>(array: T[][]): T[] {
  return Array.prototype.concat.apply([], array);
}

flatten(askA().map(parse))
  .map((date) => date.toISOString())
  .forEach((date) => console.info("Date is", date));

// This is all getting a bit unwieldy. Because the types don’t tell you much
// (everything is a regular array), it’s hard to understand what’s going on in
// that code at a glance. To fix this, let’s wrap what we’re doing—putting a
// value in a container, exposing a way to operate on that value, and exposing
// a way to get a result back from the container

// flatmap needs es2019 or higher in the target

// https://github.com/bcherny/tsoption

interface Option<T> {
  flatMap<U>(f: (value: T) => None): None;
  flatMap<U>(f: (value: T) => Option<U>): Option<U>;
  getOrElse(value: T): T;
}
class Some<T> implements Option<T> {
  constructor(private value: T) {}
  flatMap<U>(f: (value: T) => None): None;
  flatMap<U>(f: (value: T) => Some<U>): Some<U>;
  flatMap<U>(f: (value: T) => Option<U>): Option<U> {
    return f(this.value);
  }
  getOrElse(): T {
    return this.value;
  }
}
class None implements Option<never> {
  flatMap(): None {
    return this;
  }
  getOrElse<U>(value: U): U {
    return value;
  }
}

function Option<T>(value: null | undefined): None;
function Option<T>(value: T): Some<T>;
function Option<T>(value: T): Option<T> {
  if (value == null) {
    return new None();
  }
  return new Some(value);
}

function askB(): Option<string> {
  let result = prompt("When is your birthday?");
  if (result === null) {
    return new None();
  }
  return new Some(result);
}

function parseB(birthday: string): Option<Date> {
  let date = new Date(birthday);
  if (!isValid(date)) {
    return new None();
  }
  return new Some(date);
}

askB()
  .flatMap(parseB)
  .flatMap((date) => new Some(date.toISOString()))
  .flatMap((date) => new Some("Date is " + date))
  .getOrElse("Error parsing date for some reason");

export {};
