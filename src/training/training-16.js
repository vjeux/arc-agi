import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import getHeight from "../getHeight";
import getWidth from "../getWidth";

const mapping = {
  3: 4,
  1: 5,
  2: 6,
  8: 9,

  4: 3,
  5: 1,
  6: 2,
  9: 8,
};

export default function (input) {
  const output = copyMatrix(input);
  const width = getWidth(input);
  const height = getHeight(input);

  for (let i = 0; i < width; ++i) {
    for (let j = 0; j < height; ++j) {
      output[j][i] = mapping[input[j][i]];
    }
  }

  return output;
}
