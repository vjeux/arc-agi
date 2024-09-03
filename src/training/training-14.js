import buildMatrix from "../buildMatrix";
import extractShapes from "../extractShapes";
import copySubMatrix from "../copySubMatrix";
import forEachSideAndDiagonal2Wide from "../forEachSideAndDiagonal2Wide";

export default function (input) {
  const shapes = extractShapes(input, forEachSideAndDiagonal2Wide);
  const sortedShapes = shapes
    .filter((shape) => shape.color !== 0)
    .sort((a, b) => a.color - b.color);
  const shape =
    sortedShapes[0].color === sortedShapes[1].color
      ? sortedShapes[sortedShapes.length - 1]
      : sortedShapes[0];
  const output = buildMatrix(shape.width, shape.height);
  copySubMatrix({
    input,
    x1: shape.x,
    y1: shape.y,
    width: shape.width,
    height: shape.height,
    output,
    x2: 0,
    y2: 0,
  });
  return output;
}
