import copyMatrix from "../copyMatrix";
import extractShapes from "../extractShapes";
import forEachSideAndDiagonal2Wide from "../forEachSideAndDiagonal2Wide";

export default function (input) {
  const output = copyMatrix(input);

  const shapes = extractShapes(input, forEachSideAndDiagonal2Wide);
  const targetShape = shapes.find((s) => s.color === 8);
  for (let x = targetShape.x; x < targetShape.x + targetShape.width; ++x) {
    for (let y = targetShape.y; y < targetShape.y + targetShape.height; ++y) {
      if (input[y][x] === 1) {
        output[y][x] = 3;
      }
    }
  }

  return output;
}
