import copyMatrix from "../copyMatrix";
import drawLine from "../drawLine";

export default function (input) {
  const output = copyMatrix(input);

  for (let i = 0; i < 10; ++i) {
    if (input[i][0] === input[i][9] && input[i][0] !== 0) {
      drawLine({ output, x1: 0, y1: i, x2: 9, y2: i, color: input[i][0] });
    }
  }

  return output;
}
