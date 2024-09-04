import buildMatrix from "../buildMatrix";
import getHeight from "../getHeight";
import getWidth from "../getWidth";
import drawLine from "../drawLine";

export default function (input) {
  const width = getWidth(input);
  const height = getHeight(input);
  const output = buildMatrix(width, height);

  for (let i = 0; i < width; i++) {
    let color = 0;
    let count = 0;
    for (let j = 0; j < height; ++j) {
      if (input[j][i] !== 0) {
        count++;
        color = input[j][i];
      }
    }
    if (count > 0) {
      drawLine({
        output,
        x1: i,
        x2: i,
        y1: height - count,
        y2: height - 1,
        color,
      });
    }
  }

  return output;
}
