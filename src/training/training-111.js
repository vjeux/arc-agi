import extractShapes from "../extractShapes";
import shapeToMatrix from "../shapeToMatrix";

export default function (input) {
  const shapes = extractShapes(input);

  const dot = shapes.find((s) => s.color === 5);
  const shape = shapes.find((s) => s.x === dot.x - 1 && s.y === dot.y + 1);

  return shapeToMatrix(input, shape);
}
