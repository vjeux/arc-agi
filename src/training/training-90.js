import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import drawRectangle from "../drawRectangle";
import getHeight from "../getHeight";
import getWidth from "../getWidth";

function isRectangleBlack(input, x, y, width, height) {
  for (let i = 0; i < width; ++i) {
    for (let j = 0; j < height; ++j) {
      if (input[y + j][x + i] !== 0) {
        return false;
      }
    }
  }
  return true;
}

export default function (input) {
  const output = copyMatrix(input);
  const width = getWidth(input);
  const height = getHeight(input);

  let maxSurface = 0;
  let maxX;
  let maxY;
  let maxWidth;
  let maxHeight;

  for (let i = 0; i < width; ++i) {
    for (let j = 0; j < height; ++j) {
      for (let x = i; x < width; ++x) {
        for (let y = j; y < height; ++y) {
          let rectangleWidth = width - x;
          let rectangleHeight = height - y;
          if (isRectangleBlack(input, i, j, rectangleWidth, rectangleHeight)) {
            if (
              rectangleWidth > 1 &&
              rectangleHeight > 1 &&
              rectangleWidth * rectangleHeight > maxSurface
            ) {
              maxSurface = rectangleWidth * rectangleHeight;
              maxX = i;
              maxY = j;
              maxWidth = rectangleWidth;
              maxHeight = rectangleHeight;
            }
          }
        }
      }
    }
  }

  drawRectangle({
    output,
    x: maxX,
    y: maxY,
    width: maxWidth,
    height: maxHeight,
    color: 6,
  });

  return output;
}
