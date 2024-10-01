import copyMatrix from "../copyMatrix";
import copySubMatrix from "../copySubMatrix";
import extractAnyColorShapes from "../extractAnyColorShapes";
import extractShapes from "../extractShapes";
import getColor from "../getColor";
import getHeight from "../getHeight";
import getWidth from "../getWidth";
import isPixelInShape from "../isPixelInShape";
import scaleMatrix from "../scaleMatrix";
import shapeToMatrix from "../shapeToMatrix";

export default function (input) {
  const output = copyMatrix(input);

  const shapes = extractShapes(input);

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
    const redDots = extractShapes(matrix).filter((s) => s.color === 2);
    const firstRedDot = redDots[0];
    for (let i = 0; i < redDots.length; ++i) {
      const redDot = redDots[i];
      if (
        getColor(
          input,
          dot.x + redDot.x - firstRedDot.x,
          dot.y + redDot.y - firstRedDot.y
        ) !== 2
      ) {
        return;
      }
    }

    copySubMatrix({
      input: matrix,
      output: output,
      x0: firstRedDot.x,
      y0: firstRedDot.y,
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
