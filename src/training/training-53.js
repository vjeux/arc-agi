import buildMatrix from "../buildMatrix";
import copySubMatrix from "../copySubMatrix";
import extractShapes from "../extractShapes";

export default function (input) {
  const output = buildMatrix(3, 3);
  const shape = extractShapes(input).find((s) => s.color !== 0);

  copySubMatrix({
    input,
    output,
    width: shape.width,
    height: shape.height,
    x1: shape.x,
    y1: shape.y,
    x2: shape.x,
    y2: shape.y + 1,
  });

  return output;
}
