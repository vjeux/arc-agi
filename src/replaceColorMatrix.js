import copyMatrix from "./copyMatrix";
import forEachMatrix from "./forEachMatrix";

export default function replaceColorMatrix(matrix, inputColor, outputColor) {
  const output = copyMatrix(matrix);
  forEachMatrix(output, (color, x, y) => {
    if (color === inputColor) {
      output[y][x] = outputColor;
    }
  });
  return output;
}
