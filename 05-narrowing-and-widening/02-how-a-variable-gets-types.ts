interface Vector3 {
  x: number;
  y: number;
  z: number;
}

type Axis = "x" | "y" | "z";

function getComponent(vector: Vector3, axis: Axis) {
  return vector[axis];
}

{
  let vec = { x: 10, y: 20, z: 30 };
  let x: Axis = "x";
  getComponent(vec, x as Axis);
  getComponent(vec, x);
  getComponent(vec, "x");
}

{
  const obj1: { name?: string } = {};
  obj1.name = "izzy";
}

{
  const arr1 = [1, 2, 3];
  arr1.push(1);
  const arr2: [number, boolean, string] = [1, true, "Hello"];

  const arr3 = [1, 2, 3] as const;
  arr3[0] = 2;
  arr3.push(4); // This will only error in Type level

  const frozenArray = Object.freeze(arr2);
  frozenArray.push(2); // This will in type and value level
}
