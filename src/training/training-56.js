import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import forEachMatrix from "../forEachMatrix";

function matchPattern(matrix, pattern) {
  let doesMatch = true;
  forEachMatrix(matrix, (color, x, y) => {
    if (doesMatch === false) {
      return;
    }
    if (color === 0 && pattern[y][x] !== 0) {
      doesMatch = false;
    }
    if (color !== 0 && pattern[y][x] === 0) {
      doesMatch = false;
    }
  });
  return doesMatch;
}

export default function (input) {
  const output = buildMatrix(1, 1);

  if (
    matchPattern(input, [
      [1, 1, 0],
      [1, 0, 1],
      [0, 1, 0],
    ])
  ) {
    output[0][0] = 1;
  }
  if (
    matchPattern(input, [
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1],
    ])
  ) {
    output[0][0] = 2;
  }
  if (
    matchPattern(input, [
      [0, 1, 1],
      [0, 1, 1],
      [1, 0, 0],
    ])
  ) {
    output[0][0] = 3;
  }

  if (
    matchPattern(input, [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0],
    ])
  ) {
    output[0][0] = 6;
  }

  return output;
}
