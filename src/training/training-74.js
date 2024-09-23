import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import copySubMatrix from "../copySubMatrix";
import extractShapes from "../extractShapes";
import flipMatrixHorizontally from "../flipMatrixHorizontally";
import flipMatrixVertically from "../flipMatrixVertically";
import matrixToString from "../matrixToString";
import rectangleToMatrix from "../rectangleToMatrix";

export default function (input) {
  const output = copyMatrix(input);

  extractShapes(input)
    .filter((s) => s.color === 9)
    .forEach((shape) => {
      shape.forEach((pixel) => {
        output[pixel.y][pixel.x] = 0;
      });
    });

  const topRight = rectangleToMatrix({
    input: output,
    x: 16,
    y: 0,
    width: 14,
    height: 16,
  });

  const flippedTopRight = flipMatrixHorizontally(topRight);
  copySubMatrix({
    input: flippedTopRight,
    output,
    x1: 0,
    y1: 0,
    x2: 2,
    y2: 0,
    width: 14,
    height: 16,
    overrideBlack: false,
    overrideColor: false,
  });

  const bottomLeft = rectangleToMatrix({
    input: output,
    x: 0,
    y: 16,
    width: 16,
    height: 14,
  });

  const flippedBottomLeft = flipMatrixVertically(bottomLeft);
  copySubMatrix({
    input: flippedBottomLeft,
    output,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 2,
    width: 16,
    height: 14,
    overrideBlack: false,
    overrideColor: false,
  });

  const bottomRight = rectangleToMatrix({
    input: output,
    x: 16,
    y: 16,
    width: 14,
    height: 14,
  });

  const flippedBottomRight = flipMatrixHorizontally(
    flipMatrixVertically(bottomRight)
  );
  copySubMatrix({
    input: flippedBottomRight,
    output,
    x1: 0,
    y1: 0,
    x2: 2,
    y2: 2,
    width: 14,
    height: 14,
    overrideBlack: false,
    overrideColor: false,
  });

  const topLeft = rectangleToMatrix({
    input: output,
    x: 0,
    y: 0,
    width: 16,
    height: 16,
  });

  const finalTopRight = flipMatrixHorizontally(topLeft);
  copySubMatrix({
    input: finalTopRight,
    output,
    x1: 0,
    y1: 0,
    x2: 16,
    y2: 0,
    width: 14,
    height: 16,
    overrideBlack: false,
    overrideColor: false,
  });

  const finalBottomLeft = flipMatrixVertically(topLeft);
  copySubMatrix({
    input: finalBottomLeft,
    output,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 16,
    width: 16,
    height: 14,
    overrideBlack: false,
    overrideColor: false,
  });

  const finalBottomRight = flipMatrixHorizontally(
    flipMatrixVertically(topLeft)
  );
  copySubMatrix({
    input: finalBottomRight,
    output,
    x1: 0,
    y1: 0,
    x2: 16,
    y2: 16,
    width: 14,
    height: 14,
    overrideBlack: false,
    overrideColor: false,
  });

  return output;
}
