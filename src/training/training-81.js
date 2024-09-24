import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import copySubMatrix from "../copySubMatrix";
import drawRectangle from "../drawRectangle";
import extractShapes from "../extractShapes";

export default function (input) {
  const output = copyMatrix(input);

  const shapes = extractShapes(input);

  shapes
    .filter((s) => s.color !== 0)
    .forEach((shape) => {
      drawRectangle({
        output,
        x: shape.x,
        y: shape.y,
        width: shape.width,
        height: shape.height,
        color: 1,
      });

      copySubMatrix({
        input,
        output,
        x1: shape.x,
        x2: shape.x,
        y1: shape.y,
        y2: shape.y,
        width: shape.width,
        height: shape.height,
        overrideBlack: false,
      });
    });

  return output;
}
