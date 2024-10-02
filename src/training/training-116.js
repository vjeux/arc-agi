import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import copySubMatrix from "../copySubMatrix";
import flipMatrixVertically from "../flipMatrixVertically";
import getHeight from "../getHeight";
import getWidth from "../getWidth";

export default function (input) {
  const width = getWidth(input);
  const height = getHeight(input);

  const output = buildMatrix(width, height * 2);

  copySubMatrix({
    input,
    output,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: height,
    width,
    height,
  });

  copySubMatrix({
    input: flipMatrixVertically(input),
    output,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    width,
    height,
  });

  return output;
}
