import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import drawLine from "../drawLine";
import extractShapes from "../extractShapes";
import findNextBlockInLine from "../findNextBlockInLine";
import getWidth from "../getWidth";

export default function (input) {
  const output = copyMatrix(input);

  const shapes = extractShapes(input);
  const shape = shapes.find((s) => s.color === 8);
  const wall = shapes.find((s) => s.color === 2);

  if (wall.y === 0 && wall.width !== getWidth(input)) {
    const isGoingDown =
      wall.x > shape.x
        ? input[shape.y][shape.x] !== 0
        : input[shape.y][shape.x] === 0;
    let x = wall.x > shape.x ? shape.x + shape.width : shape.x - 1;
    let y = shape.y + (isGoingDown ? shape.height : -1);
    let dx = wall.x > shape.x ? 1 : -1;
    let dy = isGoingDown ? 1 : -1;
    let border = findNextBlockInLine(input, x, y, dx, dy);
    drawLine({
      output,
      x1: x,
      y1: y,
      x2: border.x - dx,
      y2: border.y - dy,
      color: 3,
    });

    x = border.x - dx;
    y = border.y - dy;
    dx = -dx;

    border = findNextBlockInLine(input, x, y, dx, dy, undefined, true);
    drawLine({
      output,
      x1: x,
      y1: y,
      x2: border.x - dx,
      y2: border.y - dy,
      color: 3,
    });
  } else {
    const isGoingLeft =
      wall.y > shape.y
        ? input[shape.y][shape.x] !== 0
        : input[shape.y][shape.x] === 0;
    let y = wall.y > shape.y ? shape.y + shape.height : shape.y - 1;
    let x = shape.x + (isGoingLeft ? shape.width : -1);
    let dy = wall.y > shape.y ? 1 : -1;
    let dx = isGoingLeft ? 1 : -1;
    let border = findNextBlockInLine(input, x, y, dx, dy);
    drawLine({
      output,
      x1: x,
      y1: y,
      x2: border.x - dx,
      y2: border.y - dy,
      color: 3,
    });

    x = border.x - dx;
    y = border.y - dy;
    dy = -dy;

    border = findNextBlockInLine(input, x, y, dx, dy, undefined, true);
    drawLine({
      output,
      x1: x,
      y1: y,
      x2: border.x - dx,
      y2: border.y - dy,
      color: 3,
    });
  }

  return output;
}
