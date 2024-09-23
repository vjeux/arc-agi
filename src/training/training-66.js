import copyMatrix from "../copyMatrix";
import drawLine from "../drawLine";
import extractShapes from "../extractShapes";
import findNextBlockInLine from "../findNextBlockInLine";

export default function (input) {
  const output = copyMatrix(input);
  const shapes = extractShapes(input);
  const start = shapes.find((s) => s.color === 3);
  const end = shapes.find((s) => s.color === 2);

  let isHorizontal = start.width === 2;
  let i = (isHorizontal && start.x <= end.x) || start.y <= end.y ? 1 : 0;
  let x = start[i].x;
  let y = start[i].y;

  let endX = end[i].x;
  let endY = end[i].y;

  let dx, dy;
  for (let i = 0; i < 10; ++i) {
    if (isHorizontal) {
      dy = 0;
      dx = x <= endX ? 1 : -1;
    } else {
      dx = 0;
      dy = y <= endY ? 1 : -1;
    }
    const next = findNextBlockInLine(input, x, y, dx, dy);
    if (next === null) {
      break;
    }
    drawLine({
      output,
      x1: Math.min(x, next.x - dx),
      y1: Math.min(y, next.y - dy),
      x2: Math.max(x, next.x - dx),
      y2: Math.max(y, next.y - dy),
      color: 3,
    });
    if (input[next.y][next.x] === 2) {
      break;
    }
    x = next.x - dx;
    y = next.y - dy;
    isHorizontal = !isHorizontal;
  }

  return output;
}
