import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import drawSquare from "../drawSquare";
import extractShapes from "../extractShapes";

export default function (input) {
  const output = buildMatrix(10, 10);

  const shapes = extractShapes(input);
  const dot = shapes.find(
    (s) =>
      s.color !== 0 &&
      s.length === 1 &&
      !shapes.find((ss) => s !== ss && s.color === ss.color)
  );

  drawSquare({
    output,
    x: dot.x - 1,
    y: dot.y - 1,
    size: 3,
    color: 2,
  });
  output[dot.y][dot.x] = dot.color;

  return output;
}
