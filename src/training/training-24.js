import copyMatrix from "../copyMatrix";
import extractShapes from "../extractShapes";
import getHeight from "../getHeight";
import getWidth from "../getWidth";
import drawLine from "../drawLine";

export default function (input) {
  const output = copyMatrix(input);

  const shapes = extractShapes(input);
  const height = getHeight(input);
  const width = getWidth(input);
  shapes.forEach((shape) => {
    if (shape.color === 2) {
      drawLine({
        output,
        x1: shape[0].x,
        y1: 0,
        x2: shape[0].x,
        y2: height - 1,
        color: shape.color,
      });
    }
  });
  shapes.forEach((shape) => {
    if (shape.color === 1 || shape.color === 3) {
      drawLine({
        output,
        x1: 0,
        y1: shape[0].y,
        x2: width - 1,
        y2: shape[0].y,
        color: shape.color,
      });
    }
  });
  return output;
}
