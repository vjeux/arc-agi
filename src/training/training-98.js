import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import drawRectangle from "../drawRectangle";
import extractShapes from "../extractShapes";

export default function (input) {
  const output = copyMatrix(input);

  extractShapes(input)
    .filter((s) => s.color !== 0)
    .forEach((shape) => {
      drawRectangle({
        output,
        x: shape.x + 1,
        y: shape.y + 1,
        width: shape.width - 2,
        height: shape.height - 2,
        color: 0,
      });
    });

  return output;
}
