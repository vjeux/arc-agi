import copyMatrix from "../copyMatrix";
import extractShapes from "../extractShapes";
import getWidth from "../getWidth";
import drawLine from "../drawLine";
import getHeight from "../getHeight";

export default function (input) {
  const output = copyMatrix(input);

  const shapes = extractShapes(input);
  const singleShape = shapes.find((s) => s.length === 1);
  const outerShape = shapes.find((s) => s.length !== 1 && s.color !== 0);

  if (singleShape.x === outerShape.x) {
    drawLine({
      output,
      color: singleShape.color,
      y1: singleShape.y,
      y2: singleShape.y,
      x1: outerShape.x + outerShape.width,
      x2: getWidth(input) - 1,
    });
  }

  if (singleShape.x === outerShape.x + outerShape.width - 1) {
    drawLine({
      output,
      color: singleShape.color,
      x1: singleShape.x,
      x2: singleShape.x,
      y1: 0,
      y2: outerShape.y - 1,
    });
  }

  if (singleShape.y === outerShape.y) {
    drawLine({
      output,
      color: singleShape.color,
      x1: singleShape.x,
      x2: singleShape.x,
      y1: outerShape.y + outerShape.height,
      y2: getHeight(input) - 1,
    });
  }

  if (singleShape.y === outerShape.y + outerShape.height - 1) {
    drawLine({
      output,
      color: singleShape.color,
      x1: singleShape.x,
      x2: singleShape.x,
      y1: 0,
      y2: outerShape.y - 1,
    });
  }

  return output;
}
