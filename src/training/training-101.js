import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import copySubMatrix from "../copySubMatrix";
import extractAnyColorShapes from "../extractAnyColorShapes";
import extractShapes from "../extractShapes";
import getHeight from "../getHeight";
import getWidth from "../getWidth";
import isPixelInShape from "../isPixelInShape";
import matrixToString from "../matrixToString";
import scaleMatrix from "../scaleMatrix";
import shapeToMatrix from "../shapeToMatrix";

export default function (input) {
  const output = copyMatrix(input);

  const shapes = extractShapes(input);
  const blueShape = shapes.find((s) => s.color === 1);

  const anyColorShapes = extractAnyColorShapes(input);
  const anyColorBlueShape = anyColorShapes.find((s) =>
    s.find((pixel) => input[pixel.y][pixel.x] === 1)
  );

  const dots = shapes.filter(
    (s) =>
      s.color !== 0 &&
      !shapes.find((ss) => isPixelInShape(s[0], anyColorBlueShape))
  );

  dots.forEach((dot) => {
    let matrix = shapeToMatrix(input, anyColorBlueShape);
    matrix = scaleMatrix(matrix, dot.width);
    const redDot = extractShapes(matrix).find((s) => s.color === 2);
    copySubMatrix({
      input: matrix,
      output: output,
      x0: redDot.x,
      y0: redDot.y,
      width: getWidth(matrix),
      height: getHeight(matrix),
      x1: 0,
      y1: 0,
      x2: dot.x,
      y2: dot.y,
    });
  });

  return output;
}
