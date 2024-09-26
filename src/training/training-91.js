import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import copySubMatrix from "../copySubMatrix";
import extractShapes from "../extractShapes";

export default function (input) {
  const grayShapes = extractShapes(input).filter((s) => s.color === 5);

  const width = grayShapes[1].x - grayShapes[0].x + 1;
  const height = grayShapes[0].height + 2;
  const output = buildMatrix(width, height);

  copySubMatrix({
    input,
    output,
    x1: grayShapes[0].x,
    y1: grayShapes[0].y - 1,
    x2: 0,
    y2: 0,
    width,
    height,
  });

  return output;
}
