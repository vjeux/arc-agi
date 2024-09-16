import buildMatrix from "../buildMatrix";
import copySubMatrix from "../copySubMatrix";
import extractShapes from "../extractShapes";

export default function (input) {
  const shape = extractShapes(input).find((s) => s.color !== 0);

  const output = buildMatrix(shape.width * 2, shape.height);

  copySubMatrix({
    input,
    output,
    width: shape.width,
    height: shape.height,
    x1: shape.x,
    y1: shape.y,
    x2: 0,
    y2: 0,
  });
  copySubMatrix({
    input,
    output,
    width: shape.width,
    height: shape.height,
    x1: shape.x,
    y1: shape.y,
    x2: shape.width,
    y2: 0,
  });

  return output;
}
