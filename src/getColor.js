import isPixelOutsideMatrix from "./isPixelOutsideMatrix";

export default function getColor(output, i, j) {
  if (isPixelOutsideMatrix(output, i, j)) {
    return null;
  }

  return output[j][i];
}
