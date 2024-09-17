import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import drawLine from "../drawLine";

export default function (input) {
  const output = copyMatrix(input);

  for (let i = 0; i < 5; ++i) {
    if (input[i][0] !== 0) {
      drawLine({
        output,
        x1: 0,
        x2: 5,
        y1: i,
        y2: i,
        color: input[i][0],
      });
      drawLine({
        output,
        x1: 6,
        x2: 10,
        y1: i,
        y2: i,
        color: input[i][10],
      });
      output[i][5] = 5;
    }
  }

  return output;
}
