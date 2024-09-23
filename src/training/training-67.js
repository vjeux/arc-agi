import buildMatrix from "../buildMatrix";
import copySubMatrix from "../copySubMatrix";
import getHeight from "../getHeight";
import getWidth from "../getWidth";

export default function (input) {
  const width = getWidth(input);
  const height = getHeight(input);
  const output = buildMatrix(width / 3, height);
  copySubMatrix({
    input,
    output,
    width: width / 3,
    height,
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0,
  });

  return output;
}
