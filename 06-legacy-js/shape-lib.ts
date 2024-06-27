export interface IShape {
  area?: number;
  type: "circle" | "rectangle" | "rightTriangle" | "square";
}

export type Shape = Circle | Rectangle | RightTriangle | Square;

export function isSquare(shape: Shape): shape is Square {
  return shape.type === "square";
}

export interface Circle extends IShape {
  radius: number;
  type: "circle";
}

export interface Rectangle extends IShape {
  length: number;
  width: number;
  type: "rectangle";
}

export interface RightTriangle extends IShape {
  base: number;
  height: number;
  type: "rightTriangle";
}

export interface Square extends IShape {
  width: number;
  type: "square";
}
