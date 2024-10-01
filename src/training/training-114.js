import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import copySubMatrix from "../copySubMatrix";
import getHeight from "../getHeight";
import getWidth from "../getWidth";

export default function (input) {
  const width = getWidth(input);
  const height = getHeight(input);
  const output = buildMatrix(width + 2, height + 2);

  copySubMatrix({
    input,
    output,
    x1: 0,
    y1: 0,
    width,
    height,
    x2: 1,
    y2: 1,
  });

  for (let i = 0; i < width; ++i) {
    output[0][i + 1] = input[0][i];
    output[width + 1][i + 1] = input[width - 1][i];
  }
  for (let j = 0; j < height; ++j) {
    output[j + 1][0] = input[j][0];
    output[j + 1][width + 1] = input[j][width - 1];
  }

  return output;
}
