function ask() {
  return prompt("When is your birthday?") || "";
}

function parse(birthday: string): Date | null {
  let date = new Date(birthday);
  if (!isValid(date)) {
    return null;
  }
  return date;
}

function isValid(date: Date): date is Date {
  return (
    Object.prototype.toString.call(date) === "[object Date]" &&
    !Number.isNaN(date.getTime())
  );
}

let date = parse(ask());

if (date) {
  console.log(`Date is ${date.toISOString()}`);
}

export {};
