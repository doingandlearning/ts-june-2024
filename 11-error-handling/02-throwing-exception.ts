function ask() {
  return prompt("When is your birthday?") || "";
}

function parse(birthday: string): Date {
  let date = new Date(birthday);
  if (!isValid(date)) {
    throw new RangeError("Enter a date in form YYYY/MM/DD");
  }
  return date;
}

function isValid(date: Date): date is Date {
  return (
    Object.prototype.toString.call(date) === "[object Date]" &&
    !Number.isNaN(date.getTime())
  );
}
try {
  let date = parse(ask());
  console.log(`Date is ${date.toISOString()}`);
  throw "Anything you want!!";
} catch (error) {
  if (error instanceof RangeError) {
    alert(error.message);
    console.log(error.stack);
    console.log(error.name);
  } else {
    console.log(error);
  }
}
