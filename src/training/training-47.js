import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import drawLine from "../drawLine";
import extractShapes from "../extractShapes";

export default function (input) {
  const output = copyMatrix(input);

  const shapes = extractShapes(input).filter((s) => s.color !== 0);

  shapes.forEach((shape) => {
    drawLine({
      output,
      x1: shape.x,
      y1: 0,
      x2: shape.x,
      y2: 8,
      color: shape.color,
    });
    drawLine({
      output,
      x1: 0,
      y1: shape.y,
      x2: 8,
      y2: shape.y,
      color: shape.color,
    });
  });

  output[shapes[0].y][shapes[1].x] = 2;
  output[shapes[1].y][shapes[0].x] = 2;

  return output;
}
