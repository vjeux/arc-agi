import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import extractShapes from "../extractShapes";
import drawLine from "../drawLine";

export default function (input) {
  const output = buildMatrix(10, 10);

  const shapes = extractShapes(input).filter((s) => s.color !== 0);
  const firstColor = shapes.find((s) => s.y < 5).color;
  const secondColor = shapes.find((s) => s.y >= 5).color;

  drawLine({
    output,
    x1: 0,
    x2: 9,
    y1: 0,
    y2: 0,
    color: firstColor,
  });
  drawLine({
    output,
    x1: 0,
    x2: 9,
    y1: 2,
    y2: 2,
    color: firstColor,
  });
  drawLine({
    output,
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 5,
    color: firstColor,
  });
  drawLine({
    output,
    x1: 9,
    x2: 9,
    y1: 0,
    y2: 5,
    color: firstColor,
  });

  drawLine({
    output,
    x1: 0,
    x2: 9,
    y1: 7,
    y2: 7,
    color: secondColor,
  });
  drawLine({
    output,
    x1: 0,
    x2: 9,
    y1: 9,
    y2: 9,
    color: secondColor,
  });
  drawLine({
    output,
    x1: 0,
    x2: 0,
    y1: 5,
    y2: 9,
    color: secondColor,
  });
  drawLine({
    output,
    x1: 9,
    x2: 9,
    y1: 5,
    y2: 9,
    color: secondColor,
  });

  return output;
}
