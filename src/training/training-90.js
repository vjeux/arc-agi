import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import drawRectangle from "../drawRectangle";
import getHeight from "../getHeight";
import getWidth from "../getWidth";

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
      let isGood = true;
      rectangleLoop: for (let x = i; x < width; ++x) {
        for (let y = j; y < height; ++y) {
          if (input[y][x] !== 0) {
            isGood = false;
            break rectangleLoop;
          }
        }
      }
      if (isGood) {
        let rectangleWidth = width - i + 1;
        let rectangleHeight = height - j + 1;
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
          console.log(maxX, maxY, maxWidth, maxHeight);
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
