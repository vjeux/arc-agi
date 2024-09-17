import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import copySubMatrix from "../copySubMatrix";
import getHeight from "../getHeight";
import getWidth from "../getWidth";

export default function (input) {
  const output = copyMatrix(input);
  const width = getWidth(input);
  const height = getHeight(input);

  let size = 0;
  for (let i = 1; i < width; ++i) {
    let found = true;
    for (let j = 0; j < height; ++j) {
      if (input[j][i] !== 1 && input[j][i] !== 0) {
        found = false;
        break;
      }
    }
    if (found === true) {
      size = i;
      break;
    }
  }

  const count = Math.ceil(width / size);
  for (let i = 0; i < count; ++i) {
    for (let j = 0; j < count; ++j) {
      copySubMatrix({
        input,
        output,
        width: size,
        height: size,
        x1: size * i,
        y1: size * j,
        x2: 0,
        y2: 0,
        overrideBlack: false,
        overrideColor: false,
      });
    }
  }

  for (let i = 0; i < count; ++i) {
    for (let j = 0; j < count; ++j) {
      copySubMatrix({
        input: output,
        output,
        width: size,
        height: size,
        x1: 0,
        y1: 0,
        x2: size * i,
        y2: size * j,
      });
    }
  }

  return output;
}
