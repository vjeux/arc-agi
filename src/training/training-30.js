import buildMatrix from "../buildMatrix";
import copySubMatrix from "../copySubMatrix";
import extractShapes from "../extractShapes";
import getHeight from "../getHeight";
import getWidth from "../getWidth";

export default function (input) {
  const output = buildMatrix(getWidth(input), getHeight(input));

  const shapes = extractShapes(input);
  const blueY = shapes.find((s) => s.color === 1).y;
  shapes.forEach((shape) => {
    if (shape.color === 0) {
      return;
    }
    copySubMatrix({
      input,
      x1: shape.x,
      y1: shape.y,
      width: shape.width,
      height: shape.height,
      output,
      x2: shape.x,
      y2: blueY,
    });
  });

  return output;
}
