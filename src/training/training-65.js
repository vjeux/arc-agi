import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import copySubMatrix from "../copySubMatrix";
import extractShapes from "../extractShapes";
import getWidth from "../getWidth";

export default function (input) {
  const width = getWidth(input);
  const size = Math.floor(width / 2);
  const shapes = extractShapes(input);
  const dot = shapes.find((s) => s.length === 1);
  const output = buildMatrix(size, size);

  copySubMatrix({
    input,
    output,
    width: size,
    height: size,
    x2: 0,
    y2: 0,
    x1: Math.floor(dot.x / (size + 1)) * (size + 1),
    y1: Math.floor(dot.y / (size + 1)) * (size + 1),
  });

  return output;
}
