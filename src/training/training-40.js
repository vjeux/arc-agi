import copyMatrix from "../copyMatrix";
import extractShapes from "../extractShapes";

export default function (input) {
  const output = copyMatrix(input);

  const shapes = extractShapes(input);

  shapes.forEach((shape) => {
    if (shape.length !== 1) {
      return;
    }
    if (shape.x !== 0 && shape.x < 5 && input[shape.y][0] !== 0) {
      output[shape.y][shape.x] = input[shape.y][0];
    }
    if (shape.x !== 9 && shape.x >= 5 && input[shape.y][9] !== 0) {
      output[shape.y][shape.x] = input[shape.y][9];
    }
    if (shape.y !== 0 && shape.y < 5 && input[0][shape.x] !== 0) {
      output[shape.y][shape.x] = input[0][shape.x];
    }
    if (shape.y !== 9 && shape.y >= 5 && input[9][shape.x] !== 0) {
      output[shape.y][shape.x] = input[9][shape.x];
    }
  });

  return output;
}
