import buildMatrix from "../buildMatrix";

export default function (input) {
  const result = buildMatrix(3, 3);
  for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
      if (input[j][i] !== 0 && input[j][i] === input[j][i + 4]) {
        result[j][i] = 2;
      }
    }
  }
  return result;
}
