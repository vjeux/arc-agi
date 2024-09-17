import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import drawLine from "../drawLine";
import extractShapes from "../extractShapes";

export default function (input) {
  const output = copyMatrix(input);

  const shapes = extractShapes(input);
  const bigShape = shapes.find((s) => s.color !== input[0][0] && s.length > 1);
  shapes
    .filter((s) => s.length === 1)
    .forEach((dot) => {
      if (
        dot.y < bigShape.y &&
        dot.x >= bigShape.x &&
        dot.x < bigShape.x + bigShape.width
      ) {
        drawLine({
          output,
          x1: dot.x,
          x2: dot.x,
          y1: dot.y,
          y2: bigShape.y - 1,
          color: dot.color,
        });
      }

      if (
        dot.y >= bigShape.y + bigShape.height &&
        dot.x >= bigShape.x &&
        dot.x < bigShape.x + bigShape.width
      ) {
        drawLine({
          output,
          x1: dot.x,
          x2: dot.x,
          y1: bigShape.y + bigShape.height,
          y2: dot.y - 1,
          color: dot.color,
        });
      }

      if (
        dot.x < bigShape.x &&
        dot.y >= bigShape.y &&
        dot.y < bigShape.y + bigShape.height
      ) {
        drawLine({
          output,
          y1: dot.y,
          y2: dot.y,
          x1: dot.x,
          x2: bigShape.x - 1,
          color: dot.color,
        });
      }

      if (
        dot.x >= bigShape.x + bigShape.width &&
        dot.y >= bigShape.y &&
        dot.y < bigShape.y + bigShape.height
      ) {
        drawLine({
          output,
          y1: dot.y,
          y2: dot.y,
          x1: bigShape.x + bigShape.width,
          x2: dot.x - 1,
          color: dot.color,
        });
      }
    });

  return output;
}
