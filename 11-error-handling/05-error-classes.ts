class BBCError extends Error {
  constructor(message: string, public code = "BBC_API_ERROR") {
    super(message);
  }
}

function doSomethingRisky() {
  throw new BBCError("You tried to do something risky!", "RISKY_BEHAVIOUR");
}

try {
  doSomethingRisky();
} catch (error) {
  if (error instanceof BBCError) {
    console.log("It's all fine ...");
    console.log(error);
    if (error.code === "BBC_API_ERROR") {
      console.log("There was an API Error");
      setTimeout(() => doSomethingRisky(), 1000);
    }
  } else {
    // not from the bbc
    console.log("Someone else did it!");
  }
}
