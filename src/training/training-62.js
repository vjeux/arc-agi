import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import copySubMatrix from "../copySubMatrix";
import extractShapes from "../extractShapes";
import flipMatrixHorizontally from "../flipMatrixHorizontally";
import flipMatrixVertically from "../flipMatrixVertically";
import replaceColorMatrix from "../replaceColorMatrix";
import shapeToMatrix from "../shapeToMatrix";

export default function (input) {
  const output = replaceColorMatrix(buildMatrix(10, 10), 0, 3);

  const shapes = extractShapes(input);
  const redShape = shapes.find((s) => s.color === 2);
  const otherShape = shapes.find((s) => s.color !== 2 && s.color !== 0);

  copySubMatrix({
    input,
    output,
    x1: otherShape.x,
    x2: otherShape.x,
    y1: otherShape.y,
    y2: otherShape.y,
    width: otherShape.width,
    height: otherShape.height,
    overrideBlack: false,
  });

  if (redShape.x >= otherShape.x + otherShape.width) {
    const flipped = flipMatrixHorizontally(shapeToMatrix(input, otherShape));
    copySubMatrix({
      input: flipped,
      output,
      width: otherShape.width,
      height: otherShape.height,
      x1: 0,
      y1: 0,
      x2: otherShape.x + otherShape.width,
      y2: otherShape.y,
      overrideBlack: false,
    });
  }

  if (redShape.x < otherShape.x) {
    const flipped = flipMatrixHorizontally(shapeToMatrix(input, otherShape));
    copySubMatrix({
      input: flipped,
      output,
      width: otherShape.width,
      height: otherShape.height,
      x1: 0,
      y1: 0,
      x2: otherShape.x - otherShape.width,
      y2: otherShape.y,
      overrideBlack: false,
    });
  }

  if (redShape.y >= otherShape.y + otherShape.height) {
    const flipped = flipMatrixVertically(shapeToMatrix(input, otherShape));
    copySubMatrix({
      input: flipped,
      output,
      width: otherShape.width,
      height: otherShape.height,
      x1: 0,
      y1: 0,
      x2: otherShape.x,
      y2: otherShape.y + otherShape.height,
      overrideBlack: false,
    });
  }

  if (redShape.y < otherShape.y) {
    const flipped = flipMatrixVertically(shapeToMatrix(input, otherShape));
    copySubMatrix({
      input: flipped,
      output,
      width: otherShape.width,
      height: otherShape.height,
      x1: 0,
      y1: 0,
      x2: otherShape.x,
      y2: otherShape.y - otherShape.height,
      overrideBlack: false,
    });
  }

  return output;
}
