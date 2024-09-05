import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import extractShapes from "../extractShapes";
import drawLine from "../drawLine";

export default function (input) {
  const output = copyMatrix(input);

  const shapes = extractShapes(input);
  shapes.forEach((shape) => {
    if (shape.color === 0) {
      return;
    }
    const otherShape = shapes.find(
      (s) => s !== shape && s.color === shape.color
    );

    drawLine({
      output,
      x1: shape.x,
      y1: shape.y,
      x2: otherShape.x,
      y2: otherShape.y,
      color: shape.color,
    });
  });

  return output;
}
