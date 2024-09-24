import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import drawLine from "../drawLine";
import getHeight from "../getHeight";
import getWidth from "../getWidth";

export default function (input) {
  const output = copyMatrix(input);
  const width = getWidth(input);
  const height = getHeight(input);

  drawLine({
    output,
    x1: 1,
    y1: height - 2,
    x2: width - 1,
    y2: 0,
    color: 2,
  });

  drawLine({
    output,
    x1: 1,
    y1: height - 1,
    x2: width - 1,
    y2: height - 1,
    color: 4,
  });

  return output;
}
