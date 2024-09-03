import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";

export default function (input) {
  const output = buildMatrix(3, 5);

  for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 5; ++j) {
      if (input[j][i] === 0 && input[j][i + 4] === 0) {
        output[j][i] = 8;
      }
    }
  }

  return output;
}
