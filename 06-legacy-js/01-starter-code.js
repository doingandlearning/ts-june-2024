var PI = 3.14;

function getCircleArea(circle) {
  var radius = circle.radius;
  return radius * radius * PI;
}

function getRectangleArea(rectangle) {
  var length = rectangle.length;
  var width = rectangle.width;
  return length * width;
}

function getSquareArea(square) {
  var width = square.width;
  return width * width;
}

function getRightTriangleArea(triangle) {
  var base = triangle.base;
  var height = triangle.height;
  return (base * height) / 2;
}

function getArea(shape) {
  switch (shape.type) {
    case "circle":
      shape.area = getCircleArea(shape);
      break;
    case "rectangle":
      shape.area = getRectangleArea(shape);
      break;
    case "square":
      shape.area = getSquareArea(shape);
      break;
    case "rightTriangle":
      shape.area = getRightTriangleArea(shape);
      break;
  }
}

var circle = { type: "circle", radius: 4 };
getArea(circle);
console.log(circle);

var rectangle = { type: "rectangle", length: 7, width: 4 };
getArea(rectangle);
console.log(rectangle);

var square = { type: "square", width: 5 };
getArea(square);
console.log(square);

var rightTriangle = {
  type: "rightTriangle",
  base: 9,
  height: 4,
};
getArea(rightTriangle);
console.log(rightTriangle);

var triangle = {
  type: "rightTriangle",
  base: 10,
  height: 5,
};
getArea(triangle);
console.log(triangle);
