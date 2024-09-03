import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import getWidth from "../getWidth";
import getHeight from "../getHeight";
import extractAnyColorShapes from "../extractAnyColorShapes";
import forEachSide from "../forEachSide";
import copySubMatrix from "../copySubMatrix";
import extractShapes from "../extractShapes";
import rotateMatrix from "../rotateMatrix";
import matrixToString from "../matrixToString";
import shapeToMatrix from "../shapeToMatrix";

function flipHorizontallyMatrix(input) {
  const width = getWidth(input);
  const height = getHeight(input);
  const output = buildMatrix(width, height);
  for (let i = 0; i < width; ++i) {
    for (let j = 0; j < height; ++j) {
      output[j][i] = input[j][width - i - 1];
    }
  }
  return output;
}

function keyPointsOverlap({ input, x, y, width, height, matrix, keyColors }) {
  if (
    x < 0 ||
    x + width > getWidth(input) ||
    y < 0 ||
    y + height > getHeight(input)
  ) {
    return false;
  }
  for (let i = 0; i < width; ++i) {
    for (let j = 0; j < height; ++j) {
      const inputColor = input[y + j][x + i];
      const matrixColor = matrix[j][i];

      if (inputColor !== 0 && !keyColors.includes(inputColor)) {
        return false;
      }
      if (keyColors.includes(inputColor) && inputColor !== matrixColor) {
        return false;
      }
      if (keyColors.includes(matrixColor) && inputColor !== matrixColor) {
        return false;
      }
    }
  }
  return true;
}

export default function (input) {
  const width = getWidth(input);
  const height = getHeight(input);
  const output = buildMatrix(width, height);

  const anyColorshapes = extractAnyColorShapes(input, forEachSide);
  const inputShapes = extractShapes(input);

  anyColorshapes
    .filter((shape) => shape.length > 3 && input[shape[0].y][shape[0].x] !== 0)
    .forEach((shape) => {
      let matrix = shapeToMatrix(input, shape);
      for (let i = 0; i < 8; ++i) {
        if (i === 4) {
          matrix = flipHorizontallyMatrix(matrix);
        }
        matrix = rotateMatrix(90, matrix);

        const colorShapes = extractShapes(matrix);
        const keyColors = colorShapes
          .filter((s) => s.length === 1 && s.color !== 0)
          .map((s) => s.color);
        const keyShape = colorShapes.find(
          (s) => s.length === 1 && s.color !== 0
        );

        inputShapes.forEach((inputShape) => {
          if (inputShape.color === keyShape.color) {
            if (
              keyPointsOverlap({
                input,
                x: inputShape.x - keyShape.x,
                y: inputShape.y - keyShape.y,
                width: getWidth(matrix),
                height: getHeight(matrix),
                matrix,
                keyColors,
              })
            ) {
              copySubMatrix({
                input: matrix,
                x1: 0,
                y1: 0,
                width: getWidth(matrix),
                height: getHeight(matrix),
                x2: inputShape.x - keyShape.x,
                y2: inputShape.y - keyShape.y,
                output,
              });
            }
          }
        });
      }
    });

  return output;
}
