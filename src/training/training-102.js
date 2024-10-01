import copyMatrix from "../copyMatrix";
import extractShapes from "../extractShapes";
import forEachShapeRectangle from "../forEachShapeRectangle";
import shapeToMatrix from "../shapeToMatrix";

export default function (input) {
  const output = copyMatrix(input);

  extractShapes(input)
    .filter((s) => s.color === 5)
    .forEach((shape) => {
      const matrix = shapeToMatrix(input, shape);
      const blackShape = extractShapes(matrix).find((s) => s.color === 0);
      if (blackShape.width !== blackShape.height) {
        return;
      }
      let isFullBlack = true;
      forEachShapeRectangle(blackShape, (x, y) => {
        if (matrix[y][x] !== 0) {
          isFullBlack = false;
        }
      });
      if (!isFullBlack) {
        return;
      }
      forEachShapeRectangle(shape, (x, y) => {
        if (input[y][x] === 0) {
          output[y][x] = 2;
        }
      });
    });

  return output;
}
