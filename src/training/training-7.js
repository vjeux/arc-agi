import buildMatrix from "../buildMatrix";

export default function (input) {
  const result = buildMatrix(7, 7);

  let colors = [0, 0, 0];
  for (let i = 0; i < 13; ++i) {
    const value = i <= 6 ? input[i][0] : input[6][i - 6];
    if (value !== 0) {
      colors[i % 3] = value;
    }
  }

  for (let i = 0; i < 13; ++i) {
    let start = i <= 6 ? { y: i, x: 0 } : { y: 6, x: i - 6 };
    for (let j = 0; j < 7; ++j) {
      if (start.y - j < 0 || start.x + j >= 7) {
        continue;
      }
      result[start.y - j][start.x + j] = colors[i % 3];
    }
  }

  return result;
}
