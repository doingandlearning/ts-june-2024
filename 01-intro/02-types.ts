// 7 Primitive
// number, string, boolean, undefined, null, BigInt, Symbol

// Object

// Type level
// type
// interface
// :
// Value level

{
  // Don't type too much!
  let name = "Kevin";
  let newName: string = name;
  newName = "Felicity";
  let newId = 34796;

  let age: number | string = 101;
}

{
  // any, void, unknown, never
  let name: any = "Kevin";
  name = true;

  function log() {
    console.log("Hello!");
  }

  function doSomethingWithAge(age: unknown) {
    age;

    if (typeof age === "string") {
      age;
    }
  }

  function example(x: string | number): boolean {
    if (typeof x === "string") {
      return true;
    } else if (typeof x === "number") {
      return false;
    }

    const exhaustiveCheck: never = x;
    return false;
  }
}

{
  const enum STATUS_CODE {
    "OK" = 200,
    "NOT_FOUND" = 404,
    "UNAUTHORIZED" = 403,
  }

  STATUS_CODE.OK;

  const status = 200;
  if (status === STATUS_CODE.OK) {
    console.log("It worked!");
  }
}
