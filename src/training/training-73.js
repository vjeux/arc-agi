import copyMatrix from "../copyMatrix";
import extractShapes from "../extractShapes";

export default function (input) {
  const output = copyMatrix(input);

  extractShapes(input)
    .filter((s) => s.color === 1)
    .forEach((dot) => {
      output[dot.y][dot.x] = 0;
      output[4][dot.x] = 1;
    });

  return output;
}
