import getWidth from "./getWidth";
import getHeight from "./getHeight";

export default function forEachPixel(input, cb) {
  const width = getWidth(input);
  const height = getHeight(input);
  for (let i = 0; i < width; ++i) {
    for (let j = 0; j < height; ++j) {
      cb(input[j][i], i, j);
    }
  }
}
