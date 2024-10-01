import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import copySubMatrix from "../copySubMatrix";
import drawLine from "../drawLine";
import drawRectangleOutline from "../drawRectangleOutline";
import forEachMatrix from "../forEachMatrix";
import getHeight from "../getHeight";
import getWidth from "../getWidth";

export default function (input) {
  const output = copyMatrix(input);

  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;

  forEachMatrix(input, (color, x, y) => {
    if (color === 1) {
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    }
  });

  drawRectangleOutline({
    output,
    x: minX,
    y: minY,
    width: maxX - minX + 1,
    height: maxY - minY + 1,
    color: 2,
  });

  const xs = {};
  const ys = {};
  for (let i = minX + 1; i <= maxX - 1; ++i) {
    for (let j = minY + 1; j <= maxY - 1; ++j) {
      if (input[j][i] === 1) {
        xs[i] = (xs[i] ?? 0) + 1;
        ys[j] = (ys[j] ?? 0) + 1;
      }
    }
  }
  Object.keys(xs).forEach((x) => {
    if (xs[x] > 1) {
      drawLine({
        output,
        x1: +x,
        x2: +x,
        y1: minY + 1,
        y2: maxY - 1,
        color: 2,
      });
    }
  });

  Object.keys(ys).forEach((y) => {
    if (ys[y] > 1) {
      drawLine({
        output,
        x1: minX + 1,
        x2: maxX - 1,
        y1: +y,
        y2: +y,
        color: 2,
      });
    }
  });

  copySubMatrix({
    input,
    output,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    width: getWidth(input),
    height: getHeight(input),
    overrideBlack: false,
  });

  return output;
}
