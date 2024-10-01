import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import copySubMatrix from "../copySubMatrix";
import extractShapes from "../extractShapes";
import flipMatrixHorizontally from "../flipMatrixHorizontally";
import flipMatrixVertically from "../flipMatrixVertically";
import getHeight from "../getHeight";
import getWidth from "../getWidth";

export default function (input) {
  const width = getWidth(input);
  const height = getHeight(input);

  const shapes = extractShapes(input);

  const cross = shapes.find((s) => s.width === width && s.height === height);

  const output = buildMatrix(width - 1, height - 1);

  const matrixWidth = (width - 1) / 2;
  const matrixHeight = (height - 1) / 2;
  let matrix = buildMatrix(matrixWidth, matrixHeight);
  copySubMatrix({
    input,
    output: matrix,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    width: matrixWidth,
    height: matrixHeight,
    color: cross.color,
  });

  copySubMatrix({
    input: matrix,
    output,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    width: matrixWidth,
    height: matrixHeight,
  });

  matrix = flipMatrixHorizontally(matrix);

  copySubMatrix({
    input: matrix,
    output,
    x1: 0,
    y1: 0,
    x2: matrixWidth,
    y2: 0,
    width: matrixWidth,
    height: matrixHeight,
  });

  matrix = flipMatrixVertically(matrix);

  copySubMatrix({
    input: matrix,
    output,
    x1: 0,
    y1: 0,
    x2: matrixWidth,
    y2: matrixHeight,
    width: matrixWidth,
    height: matrixHeight,
  });

  matrix = flipMatrixHorizontally(matrix);

  copySubMatrix({
    input: matrix,
    output,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: matrixHeight,
    width: matrixWidth,
    height: matrixHeight,
  });

  return output;
}
