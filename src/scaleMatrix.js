import buildMatrix from "./buildMatrix";
import getHeight from "./getHeight";
import getWidth from "./getWidth";

export default function scaleMatrix(input, scale) {
  const width = getWidth(input);
  const height = getHeight(input);
  const output = buildMatrix(width * scale, height * scale);

  for (let i = 0; i < width * scale; ++i) {
    for (let j = 0; j < height * scale; ++j) {
      output[j][i] = input[Math.floor(j / scale)][Math.floor(i / scale)];
    }
  }

  return output;
}
