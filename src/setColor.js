import isPixelOutsideMatrix from "./isPixelOutsideMatrix";

export default function setColor({ output, x, y, color, ignoreOutside }) {
  if (ignoreOutside === true && isPixelOutsideMatrix(output, x, y)) {
    return;
  }

  output[y][x] = color;
}
