import copyMatrix from "../copyMatrix";
import drawLine from "../drawLine";
import drawRectangle from "../drawRectangle";
import extractShapes from "../extractShapes";
import findNextBlockInLine from "../findNextBlockInLine";

export default function (input) {
  const output = copyMatrix(input);

  extractShapes(input, (cb) => {
    cb(0, -1);
    cb(0, 1);
  })
    .filter((s) => s.color === 2)
    .forEach((redShape) => {
      const blueDot = findNextBlockInLine(input, redShape.x, redShape.y, 0, -1);
      drawRectangle({ output, ...redShape, color: 0 });
      drawLine({
        output,
        x1: blueDot.x,
        y1: blueDot.y + 1,
        x2: blueDot.x,
        y2: blueDot.y + 1 + redShape.length - 1,
        color: redShape.color,
      });
    });

  return output;
}
