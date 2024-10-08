import buildMatrix from "../buildMatrix";
import forEachMatrix from "../forEachMatrix";
import copySubMatrix from "../copySubMatrix";

function areSubMatrixEqual({ input, x1, y1, x2, y2, width, height }) {
  for (let i = 0; i < width; ++i) {
    for (let j = 0; j < height; ++j) {
      if (input[y1 + j][x1 + i] !== input[y2 + j][x2 + i]) {
        return false;
      }
    }
  }
  return true;
}

export default function (input) {
  const result = buildMatrix(3, 9);

  copySubMatrix({
    input,
    x1: 0,
    y1: 0,
    output: result,
    x2: 0,
    y2: 0,
    width: 3,
    height: 6,
  });

  if (
    areSubMatrixEqual({
      input,
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 3,
      width: 3,
      height: 3,
    })
  ) {
    copySubMatrix({
      input,
      x1: 0,
      y1: 0,
      output: result,
      x2: 0,
      y2: 6,
      width: 3,
      height: 3,
    });
  } else {
    copySubMatrix({
      input,
      x1: 0,
      y1: 2,
      output: result,
      x2: 0,
      y2: 6,
      width: 3,
      height: 3,
    });
  }

  forEachMatrix(result, (value, x, y) => {
    if (value === 1) {
      result[y][x] = 2;
    }
  });

  return result;
}
