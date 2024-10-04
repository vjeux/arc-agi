import buildMatrix from "../buildMatrix";
import copySubMatrix from "../copySubMatrix";
import extractAnyColorShapes from "../extractAnyColorShapes";

export default function (input) {
  const shape = extractAnyColorShapes(input).find(
    (s) => s.color !== 0 && s.find((pixel) => input[pixel.y][pixel.x] === 8)
  );

  const output = buildMatrix(shape.width, shape.height);
  copySubMatrix({
    input,
    output,
    x1: shape.x,
    y1: shape.y,
    x2: 0,
    y2: 0,
    width: shape.width,
    height: shape.height,
    color: shape.color,
  });

  return output;
}
