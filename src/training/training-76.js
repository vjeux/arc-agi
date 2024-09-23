import copyMatrix from "../copyMatrix";
import copySubMatrix from "../copySubMatrix";
import extractAnyColorShapes from "../extractAnyColorShapes";
import extractShapes from "../extractShapes";
import flipMatrixHorizontally from "../flipMatrixHorizontally";
import getHeight from "../getHeight";
import getWidth from "../getWidth";
import isPixelInShape from "../isPixelInShape";
import rotateMatrix from "../rotateMatrix";
import shapeToMatrix from "../shapeToMatrix";
import testSubMatrix from "../testSubMatrix";

export default function (input) {
  const output = copyMatrix(input);

  const shapes = extractAnyColorShapes(input);
  const referenceShape = shapes.find(
    (s) =>
      s.color !== 0 &&
      !shapes.find((ss) => ss.color !== 0 && ss.length > s.length)
  );

  const dots = extractShapes(input).filter(
    (s) => s.color === 2 && !isPixelInShape(s[0], referenceShape)
  );

  dots.forEach((dot) => {
    let matrix = shapeToMatrix(input, referenceShape);
    for (let i = 0; i < 8; ++i) {
      if (i === 4) {
        matrix = flipMatrixHorizontally(matrix);
      }
      const redDot = extractShapes(matrix).find((s) => s.color === 2);
      const isGood = testSubMatrix({
        input: matrix,
        output,
        x0: redDot.x,
        y0: redDot.y,
        x1: 0,
        y1: 0,
        x2: dot.x,
        y2: dot.y,
        width: getWidth(matrix),
        height: getHeight(matrix),
        test: (inputColor, outputColor) => {
          if (
            (inputColor === 4 && outputColor !== 4) ||
            (inputColor !== 4 && outputColor === 4)
          ) {
            return false;
          }
          return true;
        },
      });
      if (isGood) {
        copySubMatrix({
          input: matrix,
          output,
          x0: redDot.x,
          y0: redDot.y,
          x1: 0,
          y1: 0,
          x2: dot.x,
          y2: dot.y,
          width: getWidth(matrix),
          height: getHeight(matrix),
        });
      }
      matrix = rotateMatrix(90, matrix);
    }
  });

  return output;
}
