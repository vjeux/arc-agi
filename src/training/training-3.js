import buildMatrix from "../buildMatrix";
import forEachMatrix from "../forEachMatrix";

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

function copySubMatrix({ input, x1, y1, output, x2, y2, width, height }) {
  for (let i = 0; i < width; ++i) {
    for (let j = 0; j < height; ++j) {
      output[y2 + j][x2 + i] = input[y1 + j][x1 + i];
    }
  }
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

  forEachMatrix(result, (value, i, j) => {
    if (value === 1) {
      result[i][j] = 2;
    }
  });

  return result;
}
