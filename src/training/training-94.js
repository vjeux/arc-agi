import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import drawLine from "../drawLine";
import extractShapes from "../extractShapes";
import getHeight from "../getHeight";
import getWidth from "../getWidth";

export default function (input) {
  const output = copyMatrix(input);

  const squares = extractShapes(input).filter((s) => s.color === 1);
  squares.forEach((square) => {
    drawLine({
      output,
      x1: 0,
      x2: getWidth(input) - 1,
      y1: square.y + 2,
      y2: square.y + 2,
      color: 6,
    });
    drawLine({
      output,
      y1: 0,
      y2: getHeight(input) - 1,
      x1: square.x + 2,
      x2: square.x + 2,
      color: 6,
    });
    output[square.y + 2][square.x] = 1;
    output[square.y][square.x + 2] = 1;
    output[square.y + square.height - 1][square.x + 2] = 1;
    output[square.y + 2][square.x + square.width - 1] = 1;
  });

  return output;
}
