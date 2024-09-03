import isPixelOutsideMatrix from "./isPixelOutsideMatrix";

export default function getColorIgnoreOutside(output, i, j) {
  if (isPixelOutsideMatrix(output, i, j)) {
    return null;
  }

  return output[j][i];
}
