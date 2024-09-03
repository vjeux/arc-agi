import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import extractAnyColorShapes from "../extractAnyColorShapes";
import forEachDiagonal from "../forEachDiagonal";
import forEachSide from "../forEachSide";
import forEachSideAndDiagonal2Wide from "../forEachSideAndDiagonal2Wide";

function forEachSideAt2(cb) {
  return forEachSide((x, y) => cb(x * 2, y * 2));
}
function forEachDiagonalAt2(cb) {
  return forEachDiagonal((x, y) => cb(x * 2, y * 2));
}

export default function (input) {
  const output = copyMatrix(input);

  const shape = extractAnyColorShapes(
    input,
    forEachSideAndDiagonal2Wide
  ).filter((shape) => shape.color !== 0)[0];
  const center = {
    x: shape.x + (shape.width - 1) / 2,
    y: shape.y + (shape.height - 1) / 2,
  };

  const forEachs = [forEachDiagonal, forEachSideAt2, forEachDiagonalAt2];
  forEachs.forEach((forEach) => {
    let currentColor;
    forEach((x, y) => {
      currentColor = currentColor || input[y + center.y][x + center.x];
    });
    forEach((x, y) => {
      output[y + center.y][x + center.x] = currentColor;
    });
  });

  return output;
}
