import copyMatrix from "../copyMatrix";
import drawRectangleOutline from "../drawRectangleOutline";
import drawSquare from "../drawSquare";
import extractShapes from "../extractShapes";
import getHeight from "../getHeight";
import getWidth from "../getWidth";

export default function (input) {
  const output = copyMatrix(input);
  const width = getWidth(input);
  const height = getHeight(input);

  const square = extractShapes(input).find((s) => s.color === 2);

  if (width > height) {
    drawSquare({ output, x: square.x, y: square.y, size: 3, color: 0 });
    output[square.y + 1][square.x + 1] = 3;
    drawRectangleOutline({
      output,
      x: square.x + 2,
      y: square.y,
      width: square.width,
      height: square.height,
      color: 2,
    });
  } else {
    drawSquare({ output, x: square.x, y: square.y, size: 3, color: 0 });
    output[square.y + 1][square.x + 1] = 3;
    drawRectangleOutline({
      output,
      x: square.x,
      y: square.y + 2,
      width: square.width,
      height: square.height,
      color: 2,
    });
  }

  return output;
}
