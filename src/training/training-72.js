import buildMatrix from "../buildMatrix";

export default function (input) {
  const output = buildMatrix(5, 6);

  for (let i = 0; i < 5; ++i) {
    for (let j = 0; j < 6; ++j) {
      if (input[j][i] !== input[j + 7][i]) {
        output[j][i] = 3;
      }
    }
  }

  return output;
}
