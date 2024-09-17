import buildMatrix from "./buildMatrix";
import getWidth from "./getWidth";
import getHeight from "./getHeight";

export default function flipMatrixVertically(input) {
  const inputWidth = getWidth(input);
  const inputHeight = getHeight(input);

  const output = buildMatrix(inputWidth, inputHeight);

  for (let i = 0; i < inputWidth; i++) {
    for (let j = 0; j < inputHeight; ++j) {
      output[inputHeight - j - 1][i] = input[j][i];
    }
  }

  return output;
}
