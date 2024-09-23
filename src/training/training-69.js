import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import copySubMatrix from "../copySubMatrix";
import drawRectangle from "../drawRectangle";
import extractAnyColorShapes from "../extractAnyColorShapes";
import forEachSide from "../forEachSide";

export default function (input) {
  const output = copyMatrix(input);

  const shapes = extractAnyColorShapes(input, forEachSide);
  const coloredShape = shapes.find((s) => s.color !== 0 && s.color !== 8);
  drawRectangle({
    output,
    x: coloredShape.x,
    y: coloredShape.y,
    width: coloredShape.width,
    height: coloredShape.height,
    color: 0,
  });

  shapes
    .filter((s) => s.color !== 0 && s !== coloredShape)
    .forEach((shape) => {
      copySubMatrix({
        input,
        output,
        width: coloredShape.width,
        height: coloredShape.height,
        x1: coloredShape.x,
        y1: coloredShape.y,
        x2: shape.x,
        y2: shape.y,
      });
    });

  return output;
}
