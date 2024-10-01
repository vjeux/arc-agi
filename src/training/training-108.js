import buildMatrix from "../buildMatrix";
import scaleMatrix from "../scaleMatrix";

export default function (input) {
  const output = buildMatrix(5, 5);

  for (let i = 0; i < 5; ++i) {
    for (let j = 0; j < 5; ++j) {
      output[j][i] = input[j * 2 + 1][i * 2 + 1];
    }
  }

  return scaleMatrix(output, 4);
}
