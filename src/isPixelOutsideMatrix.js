import getWidth from "./getWidth";
import getHeight from "./getHeight";

export default function isPixelOutsideMatrix(input, i, j) {
  const width = getWidth(input);
  const height = getHeight(input);

  return i < 0 || j < 0 || i >= width || j >= height;
}
