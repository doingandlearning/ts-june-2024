import * as ShapeTypes from "./shape-lib";
const PI = Math.PI;

function getCircleArea(circle: ShapeTypes.Circle) {
  const radius = circle.radius;
  return radius * radius * PI;
}

function getRectangleArea(rectangle: ShapeTypes.Rectangle) {
  const length = rectangle.length;
  const width = rectangle.width;
  return length * width;
}

function getSquareArea(square: ShapeTypes.Square) {
  const width = square.width;
  return width * width;
}

function getRightTriangleArea(triangle: ShapeTypes.RightTriangle) {
  const base = triangle.base;
  const height = triangle.height;
  return (base * height) / 2;
}

function getArea(shape: ShapeTypes.Shape) {
  switch (shape.type) {
    case "circle":
      shape.area = getCircleArea(shape);
      break;
    case "rectangle":
      shape.area = getRectangleArea(shape);
      break;
    case "square":
      shape.area = getSquareArea(shape as ShapeTypes.Square);
      break;
    case "rightTriangle":
      shape.area = getRightTriangleArea(shape as ShapeTypes.RightTriangle);
      break;
  }
}

function getArea2(shape: ShapeTypes.Shape) {
  if (ShapeTypes.isSquare(shape)) {
    shape;
  }
}

const circle: ShapeTypes.Circle = { type: "circle", radius: 4 };
getArea(circle);
console.log(circle);

const rectangle: ShapeTypes.Rectangle = {
  type: "rectangle",
  length: 7,
  width: 4,
};
getArea(rectangle);
console.log(rectangle);

const square: ShapeTypes.Square = { type: "square", width: 5 };
getArea(square);
console.log(square);

const rightTriangle: ShapeTypes.RightTriangle = {
  type: "rightTriangle",
  base: 9,
  height: 4,
};
getArea(rightTriangle);
console.log(rightTriangle);

const triangle: ShapeTypes.RightTriangle = {
  type: "rightTriangle",
  base: 10,
  height: 5,
};
getArea(triangle);
console.log(triangle);
