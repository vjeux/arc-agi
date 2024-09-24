import isPixelOutsideMatrix from "./isPixelOutsideMatrix";

export default function getColor(output, x, y) {
  if (isPixelOutsideMatrix(output, x, y)) {
    return null;
  }

  return output[y][x];
}
