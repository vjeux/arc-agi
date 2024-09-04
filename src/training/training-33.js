import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import copySubMatrix from "../copySubMatrix";

export default function (input) {
  const output = copyMatrix(input);

  for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
      if (i === 0 && j === 0) {
        continue;
      }
      copySubMatrix({
        input,
        output,
        width: 3,
        height: 3,
        x1: 1,
        y1: 1,
        overrideColor: false,
        x2: i === 0 ? 1 : i === 2 ? 7 : 13,
        y2: j === 0 ? 1 : j === 2 ? 7 : 13,
        color: input[5][5],
      });
    }
  }

  return output;
}
