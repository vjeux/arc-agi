import buildMatrix from "../buildMatrix";
import copySubMatrix from "../copySubMatrix";
import extractAnyColorShapes from "../extractAnyColorShapes";

export default function (input) {
  const output = buildMatrix(3, 3);
  const shape = extractAnyColorShapes(input).find((s) => s.color !== 0);

  copySubMatrix({
    input,
    output,
    width: 3,
    height: 3,
    x1: shape.x,
    y1: shape.y,
    x2: 0,
    y2: 0,
  });

  return output;
}
