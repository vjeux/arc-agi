import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import extractShapes from "../extractShapes";

export default function (input) {
  const output = copyMatrix(input);

  extractShapes(input)
    .filter((s) => s.length === 1)
    .forEach((dot) => {
      output[dot.y][dot.x] = 0;
    });

  return output;
}
