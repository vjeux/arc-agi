import copyMatrix from "../copyMatrix";
import extractShapes from "../extractShapes";
import isPixelOutsideMatrix from "../isPixelOutsideMatrix";
import drawForEach from "../drawForEach";
import forEach22Square from "../forEach22Square";

function forEachHorizontal3Bar(cb) {
  cb(0, 0);
  cb(1, 0);
  cb(2, 0);
}
forEachHorizontal3Bar.color = 2;

function forEachVertical3Bar(cb) {
  cb(0, 0);
  cb(0, 1);
  cb(0, 2);
}
forEachVertical3Bar.color = 2;

forEach22Square.color = 8;

function isForEachGray(input, x, y, forEach) {
  let result = true;
  forEach((i, j) => {
    if (
      result === false ||
      isPixelOutsideMatrix(input, x + i, y + j) ||
      input[y + j][x + i] !== 5
    ) {
      result = false;
    }
  });
  return result;
}

export default function (input) {
  const shape = extractShapes(input).find((shape) => shape.color === 5);

  let result = null;
  function try_(matrix, i, forEach) {
    if (result !== null) {
      return;
    }

    if (isForEachGray(matrix, shape[i].x, shape[i].y, forEach)) {
      matrix = copyMatrix(matrix);
      drawForEach({
        output: matrix,
        x: shape[i].x,
        y: shape[i].y,
        forEach,
        color: forEach.color,
        ignoreOutside: true,
      });
    }

    if (matrix[shape[i].y][shape[i].x] === 5) {
      return false;
    }

    if (i + 1 === shape.length) {
      result = matrix;
    } else {
      try_(matrix, i + 1, forEachHorizontal3Bar);
      try_(matrix, i + 1, forEachVertical3Bar);
      try_(matrix, i + 1, forEach22Square);
    }
  }

  const output = copyMatrix(input);
  try_(output, 0, forEachHorizontal3Bar);
  try_(output, 0, forEachVertical3Bar);
  try_(output, 0, forEach22Square);

  return result;
}
