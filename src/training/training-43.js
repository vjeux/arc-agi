import copyMatrix from "../copyMatrix";
import getHeight from "../getHeight";
import getWidth from "../getWidth";

export default function (input) {
  const output = copyMatrix(input);

  const width = getWidth(input);
  const height = getHeight(input);

  for (let i = 0; i < width; ++i) {
    for (let j = 0; j < height; ++j) {
      if (input[0][i] !== 0 && input[j][width - 1] !== 0) {
        output[j][i] = 2;
      }
    }
  }

  return output;
}
