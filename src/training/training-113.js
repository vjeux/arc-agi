import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import copySubMatrix from "../copySubMatrix";
import flipMatrixVertically from "../flipMatrixVertically";
import getHeight from "../getHeight";
import getWidth from "../getWidth";

export default function (input) {
  const output = copyMatrix(input);

  const matrix = flipMatrixVertically(input);
  copySubMatrix({
    input: matrix,
    output,
    x1: 0,
    y1: getHeight(input) / 2,
    x2: 0,
    y2: getHeight(input) / 2,
    width: getWidth(input),
    height: getHeight(input) / 2,
  });

  return output;
}
