import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import copySubMatrix from "../copySubMatrix";
import flipMatrixHorizontally from "../flipMatrixHorizontally";
import flipMatrixVertically from "../flipMatrixVertically";
import getHeight from "../getHeight";
import getWidth from "../getWidth";

export default function (input) {
  const width = getWidth(input);
  const height = getHeight(input);
  const output = buildMatrix(width * 2, height * 2);

  let matrix = input;
  copySubMatrix({
    input: matrix,
    output,
    width,
    height,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
  });

  matrix = flipMatrixHorizontally(matrix);
  copySubMatrix({
    input: matrix,
    output,
    width,
    height,
    x1: 0,
    y1: 0,
    x2: width,
    y2: 0,
  });

  matrix = flipMatrixVertically(matrix);
  copySubMatrix({
    input: matrix,
    output,
    width,
    height,
    x1: 0,
    y1: 0,
    x2: width,
    y2: height,
  });

  matrix = flipMatrixHorizontally(matrix);
  copySubMatrix({
    input: matrix,
    output,
    width,
    height,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: height,
  });

  return output;
}
