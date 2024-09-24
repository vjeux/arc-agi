import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import extractShapes from "../extractShapes";

export default function (input) {
  const output = copyMatrix(input);

  extractShapes(input)
    .filter((s) => s.color !== 0)
    .forEach((dot) => {
      output[dot.y + 1][dot.x - 1] = dot.color;
      output[dot.y + 1][dot.x + 1] = dot.color;

      output[dot.y + 2][dot.x] = dot.color;

      output[dot.y + 3][dot.x - 1] = dot.color;
      output[dot.y + 3][dot.x + 1] = dot.color;

      output[dot.y + 4][dot.x] = dot.color;

      output[dot.y + 5][dot.x - 1] = dot.color;
      output[dot.y + 5][dot.x + 1] = dot.color;
    });

  return output;
}
