import copyMatrix from "../copyMatrix";
import copySubMatrix from "../copySubMatrix";
import drawRectangle from "../drawRectangle";
import extractShapes from "../extractShapes";
import flipMatrixHorizontally from "../flipMatrixHorizontally";
import forEachSideAndDiagonal2Wide from "../forEachSideAndDiagonal2Wide";
import rectangleToMatrix from "../rectangleToMatrix";

export default function (input) {
  const output = copyMatrix(input);
  const shapes = extractShapes(input, forEachSideAndDiagonal2Wide);

  const rectangle = shapes.find(
    (s) =>
      s.color !== 0 &&
      !shapes.find((ss) => ss.color !== 0 && ss !== s && ss.width < s.width)
  );
  drawRectangle({
    output,
    ...rectangle,
    color: 0,
  });

  const shape = shapes.find((s) => s.color !== 0 && s !== rectangle);

  const isLeft = rectangle.x < shape.x + shape.width / 2;

  let realLeft;
  let realWidth = shape.width;
  if (isLeft) {
    let start = Math.min(rectangle.x, shape.x);
    let end = Math.max(rectangle.x, shape.x);
    for (let left = start; left <= end; ++left) {
      realLeft = left;
      b: for (let j = shape.y; j < shape.y + shape.height; ++j) {
        for (let i = left; i < shape.x + shape.width; ++i) {
          let flippedX = shape.x + shape.width - (i - left) - 1;
          if (
            input[j][flippedX] !== rectangle.color &&
            input[j][i] !== rectangle.color &&
            input[j][flippedX] !== input[j][i]
          ) {
            realLeft = null;
            break b;
          }
        }
      }
      if (realLeft !== null) {
        break;
      }
    }
    realWidth = shape.x + shape.width - realLeft;
  }

  const half = rectangleToMatrix({
    input,
    x: isLeft ? realLeft + Math.ceil(realWidth / 2) : shape.x,
    y: shape.y,
    width: Math.floor(realWidth / 2),
    height: shape.height,
  });
  const flippedHalf = flipMatrixHorizontally(half);

  copySubMatrix({
    input: flippedHalf,
    output,
    x1: 0,
    y1: 0,
    x2: !isLeft ? shape.x + Math.ceil(shape.width / 2) : realLeft,
    y2: shape.y,
    width: Math.floor(realWidth / 2),
    height: shape.height,
  });

  return output;
}
