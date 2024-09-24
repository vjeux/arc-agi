import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import drawRectangle from "../drawRectangle";
import drawSquare from "../drawSquare";
import extractAnyColorShapes from "../extractAnyColorShapes";

export default function (input) {
  const output = copyMatrix(input);

  extractAnyColorShapes(input)
    .filter((s) => s.color !== 0)
    .forEach((shape) => {
      if (shape.width === 3) {
        drawSquare({
          output,
          x: shape.x - 1,
          y: shape.y - 1,
          size: shape.width + 2,
          color: input[shape.y][shape.x],
        });
        drawSquare({
          output,
          x: shape.x,
          y: shape.y,
          size: shape.width,
          color: input[shape.y + 1][shape.x + 1],
        });
        output[shape.y + 1][shape.x + 1] = input[shape.y][shape.x];
        output[shape.y - 1][shape.x - 1] = 0;
        output[shape.y - 1][shape.x + shape.width] = 0;
        output[shape.y + shape.width][shape.x - 1] = 0;
        output[shape.y + shape.width][shape.x + shape.width] = 0;
      }

      if (shape.width === 4) {
        drawSquare({
          output,
          x: shape.x - 2,
          y: shape.y - 2,
          size: shape.width + 4,
          color: input[shape.y][shape.x],
        });
        drawSquare({
          output,
          x: shape.x,
          y: shape.y,
          size: shape.width,
          color: input[shape.y + 1][shape.x + 1],
        });
        drawSquare({
          output,
          x: shape.x + 1,
          y: shape.y + 1,
          size: shape.width - 2,
          color: input[shape.y][shape.x],
        });
        drawSquare({
          output,
          x: shape.x - 2,
          y: shape.y - 2,
          size: 2,
          color: 0,
        });
        drawSquare({
          output,
          x: shape.x + shape.width,
          y: shape.y - 2,
          size: 2,
          color: 0,
        });
        drawSquare({
          output,
          x: shape.x - 2,
          y: shape.y + shape.height,
          size: 2,
          color: 0,
        });
        drawSquare({
          output,
          x: shape.x + shape.width,
          y: shape.y + shape.height,
          size: 2,
          color: 0,
        });
      }
    });

  return output;
}
