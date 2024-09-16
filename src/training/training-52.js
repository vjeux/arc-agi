import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import copySubMatrix from "../copySubMatrix";
import drawLine from "../drawLine";
import extractShapes from "../extractShapes";

export default function (input) {
  const output = buildMatrix(3, 3);

  const shapes = extractShapes(input);
  shapes
    .filter((s) => s.width === 3 && s.height === 1)
    .forEach((shape) => {
      drawLine({
        output,
        x1: 0,
        x2: 2,
        y1: shape.y,
        y2: shape.y,
        color: 5,
      });
    });
  return output;
}
