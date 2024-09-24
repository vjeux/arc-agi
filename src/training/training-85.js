import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import extractShapes from "../extractShapes";

export default function (input) {
  const output = copyMatrix(input);

  extractShapes(input)
    .filter((s) => s.color !== 0)
    .forEach((shape) => {
      for (let i = shape.x + 1; i < shape.x + shape.width; i += 2) {
        output[shape.y + 1][i] = 0;
      }
    });

  return output;
}
