import copyMatrix from "../copyMatrix";
import extractShapes from "../extractShapes";
import drawLine from "../drawLine";

export default function (input) {
  const output = copyMatrix(input);

  const shapes = extractShapes(input).filter((s) => s.color !== 0);
  shapes.forEach((shape) => {
    const otherShape = shapes.find(
      (s) => s !== shape && (s.x === shape.x || s.y === shape.y)
    );
    if (otherShape === undefined) {
      return;
    }

    if (shape.x === otherShape.x && shape.y < otherShape.y) {
      drawLine({
        output,
        x1: shape.x,
        x2: shape.x,
        y1: shape.y + 1,
        y2: otherShape.y - 1,
        color: 3,
      });
    }
    if (shape.y === otherShape.y && shape.x < otherShape.x) {
      drawLine({
        output,
        x1: shape.x + 1,
        x2: otherShape.x - 1,
        y1: shape.y,
        y2: shape.y,
        color: 3,
      });
    }
  });

  return output;
}
