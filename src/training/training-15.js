import copyMatrix from "../copyMatrix";
import extractShapes from "../extractShapes";

export default function (input) {
  const output = copyMatrix(input);

  extractShapes(input).forEach((shape) => {
    if (shape.color === 1) {
      const x = shape[0].x;
      const y = shape[0].y;
      output[y - 1][x] = 7;
      output[y + 1][x] = 7;
      output[y][x - 1] = 7;
      output[y][x + 1] = 7;
    }

    if (shape.color === 2) {
      const x = shape[0].x;
      const y = shape[0].y;
      output[y - 1][x - 1] = 4;
      output[y + 1][x + 1] = 4;
      output[y + 1][x - 1] = 4;
      output[y - 1][x + 1] = 4;
    }
  });
  return output;
}
