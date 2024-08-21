import buildMatrix from "../buildMatrix";

export default function (input) {
  const result = buildMatrix(9, 9);

  for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
      if (input[j][i] !== 0) {
        for (let x = 0; x < 3; ++x) {
          for (let y = 0; y < 3; ++y) {
            result[j * 3 + y][i * 3 + x] = input[y][x];
          }
        }
      }
    }
  }
  return result;
}
