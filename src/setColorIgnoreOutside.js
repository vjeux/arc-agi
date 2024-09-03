import isPixelOutsideMatrix from "./isPixelOutsideMatrix";

export default function setColorIgnoreOutside(output, i, j, color) {
  if (isPixelOutsideMatrix(output, i, j)) {
    return;
  }

  output[j][i] = color;
}
