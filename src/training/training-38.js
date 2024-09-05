import buildMatrix from "../buildMatrix";
import extractShapes from "../extractShapes";

export default function (input) {
  const output = buildMatrix(5, 1);

  const shapes = extractShapes(input);
  const count = shapes.filter((s) => s.length === 4 && s.color === 1).length;

  for (let i = 0; i < count; ++i) {
    output[0][i] = 1;
  }

  return output;
}
