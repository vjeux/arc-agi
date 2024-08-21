import buildMatrix from "../buildMatrix";
import getWidth from "../getWidth";
import getHeight from "../getHeight";

export default function (input) {
  const width = getWidth(input);
  const height = getHeight(input);

  const result = buildMatrix(width, height);
  for (let i = 0; i < height; ++i) {
    if (i < height - 1 && input[i + 1].every((e) => e === 0)) {
      result[i] = [...input[i]];
    } else if (i < height - 2 && input[i + 2].every((e) => e === 0)) {
      const row = [...input[i]];
      for (let j = width - 1; j >= 0; --j) {
        if (row[j] !== 0) {
          row[j - 1] = row[j];
          row[j] = 0;
          break;
        }
      }
      result[i] = [0, ...row].slice(0, -1);
    } else {
      result[i] = [0, ...input[i]].slice(0, -1);
    }
  }

  return result;
}
