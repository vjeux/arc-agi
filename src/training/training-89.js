import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import copySubMatrix from "../copySubMatrix";
import extractAnyColorShapes from "../extractAnyColorShapes";
import extractShapes from "../extractShapes";
import flipMatrixHorizontally from "../flipMatrixHorizontally";
import isPixelInShape from "../isPixelInShape";
import shapeToMatrix from "../shapeToMatrix";

export default function (input) {
  const output = copyMatrix(input);

  const coloredShapes = extractAnyColorShapes(input).filter(
    (s) => s.color !== 0 && s.length > 1
  );
  const dots = extractShapes(input).filter(
    (s) => s.color !== 0 && s.length === 1
  );

  coloredShapes.forEach((coloredShape) => {
    let matrix = shapeToMatrix(input, coloredShape);
    let coloredDot = extractShapes(matrix).find(
      (s) => s.color === 2 || s.color === 3
    );
    if (coloredDot.color === 2) {
      matrix = flipMatrixHorizontally(matrix);
      coloredDot = extractShapes(matrix).find(
        (s) => s.color === 2 || s.color === 3
      );
    }

    dots.forEach((dot) => {
      if (dot.color !== coloredDot.color) {
        return;
      }
      if (isPixelInShape(dot, coloredShape)) {
        return;
      }

      copySubMatrix({
        input: matrix,
        output,
        x0: coloredDot.x,
        y0: coloredDot.y,
        x1: 0,
        y1: 0,
        width: coloredShape.width,
        height: coloredShape.height,
        x2: dot.x,
        y2: dot.y,
      });
    });
  });

  return output;
}
