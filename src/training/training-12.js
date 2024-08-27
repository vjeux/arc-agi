import copyMatrix from "../copyMatrix";
import extractShapes from "../extractShapes";
import drawLine from "../drawLine";

export default function (input) {
  const output = copyMatrix(input);

  const shapes = extractShapes(input);
  shapes.forEach((shape) => {
    if (shape.length !== 1) {
      return;
    }
    const insideColor = shape.color;
    const outsideColor = input[shape[0].y - 1][shape[0].x];

    drawLine({
      output,
      x1: shape[0].x - 2,
      y1: shape[0].y,
      x2: shape[0].x + 2,
      y2: shape[0].y,
      color: outsideColor,
    });
    drawLine({
      output,
      x1: shape[0].x,
      y1: shape[0].y - 2,
      x2: shape[0].x,
      y2: shape[0].y + 2,
      color: outsideColor,
    });
    drawLine({
      output,
      x1: shape[0].x - 2,
      y1: shape[0].y - 2,
      x2: shape[0].x + 2,
      y2: shape[0].y + 2,
      color: insideColor,
    });
    drawLine({
      output,
      x1: shape[0].x - 2,
      y1: shape[0].y + 2,
      x2: shape[0].x + 2,
      y2: shape[0].y - 2,
      color: insideColor,
    });
  });

  return output;
}
