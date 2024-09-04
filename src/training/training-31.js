import buildMatrix from "../buildMatrix";
import copySubMatrix from "../copySubMatrix";
import extractShapes from "../extractShapes";
import getHeight from "../getHeight";
import getWidth from "../getWidth";

export default function (input) {
  const shape = extractShapes(input).find((s) => s.color !== 0);
  const output = buildMatrix(shape.width, shape.height);
  copySubMatrix({
    input,
    x1: shape.x,
    y1: shape.y,
    width: shape.width,
    height: shape.height,
    output,
    x2: 0,
    y2: 0,
  });

  return output;
}
