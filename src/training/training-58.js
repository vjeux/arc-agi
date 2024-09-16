import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import getHeight from "../getHeight";
import getWidth from "../getWidth";

export default function (input) {
  const width = getWidth(input);
  const height = getHeight(input);
  const output = buildMatrix(width, height);

  let x = 0;
  let y = 0;

  for (let i = 0; i < 10; ++i) {
    while (true) {
      output[y][x] = 3;
      if (x === width - 1) {
        break;
      }
      if (x + 2 <= width - 1 && output[y][x + 2] !== 0) {
        break;
      }
      x++;
    }

    while (true) {
      output[y][x] = 3;
      if (y === height - 1) {
        break;
      }
      if (y + 2 <= height - 1 && output[y + 2][x] !== 0) {
        break;
      }
      y++;
    }

    while (true) {
      output[y][x] = 3;
      if (x === 0) {
        break;
      }
      if (x - 2 >= 0 && output[y][x - 2] !== 0) {
        break;
      }
      x--;
    }

    while (true) {
      output[y][x] = 3;
      if (y === 0) {
        break;
      }
      if (y - 2 >= 0 && output[y - 2][x] !== 0) {
        break;
      }
      y--;
    }
  }

  return output;
}
