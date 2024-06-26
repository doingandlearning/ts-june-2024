// 1. Default parameters

function areaOfRect(length = 1, width = length) {
  return length * width;
}

const rect1 = areaOfRect(3, 4);
const square = areaOfRect(4);

// 2. Template literals

const greeting = "Hello, rect1 you have an area of" + rect1 + "units squared.";
const greetingLiteral = `Hello, rect1 you have an area ${rect1} units squared.


I respect new lines!`;

console.log(greetingLiteral);

// 3. Object literals

function getLaptop(make: string, model: string, year: number) {
  return {
    make,
    model,
    year,
  };
}

// 4. Arrow functions
{
  function perimeterOfRect(length: number, width: number): number {
    return 2 * (length + width);
  }

  let greet2 = function (name: string) {
    return "hello " + name;
  };

  let greet3 = (name: string): string => "hello " + name;
  let greet4 = (name: string): string => {
    return "hello " + name;
  };

  let greet5 = new Function("name", 'return "hello " + name');
}

// 5. class keyword

// 6. var/let/const
function simulateDom() {
  var pseudoDom = {
    button1: {},
    button2: {},
    button3: {},
  };
  // not block-scoped
  for (let i = 1; i <= 3; i++) {
    var element = pseudoDom[`button${i}`];
    element.click = function () {
      return `Item ${i} is clicked.`;
    };
  }
  // i = 4
  console.log(pseudoDom.button1.click());
  console.log(pseudoDom.button2.click()); // undefined
  console.log(pseudoDom.button3.click()); // 3,3,3 // 1,2,3 // nothing! // 4,4,4
}

simulateDom();
