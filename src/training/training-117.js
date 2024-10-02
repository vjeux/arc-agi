import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import copySubMatrix from "../copySubMatrix";
import extractShapes from "../extractShapes";
import flipMatrixHorizontally from "../flipMatrixHorizontally";
import flipMatrixVertically from "../flipMatrixVertically";
import matrixToString from "../matrixToString";
import shapeToMatrix from "../shapeToMatrix";

export default function (input) {
  const output = copyMatrix(input);

  const shapes = extractShapes(input);
  const cross = shapes.find(
    (s) =>
      s.color !== 0 && s.width === 3 && s.height === 3 && input[s.y][s.x] !== 0
  );
  const shape = shapes.find((s) => s.color !== 0 && s !== cross);

  let matrix = shapeToMatrix(input, shape);

  let deltaX, deltaY;
  if (shape.x > cross.x) {
    matrix = flipMatrixHorizontally(matrix);
    deltaX = shape.x - cross.x - cross.height;
  } else {
    deltaX = cross.x - shape.x - shape.width;
  }
  if (shape.y > cross.y) {
    matrix = flipMatrixVertically(matrix);
    deltaY = shape.y - cross.y - cross.height;
  } else {
    deltaY = cross.y - shape.y - shape.height;
  }

  copySubMatrix({
    input: matrix,
    output,
    x1: 0,
    y1: 0,
    x2: cross.x - shape.width - deltaX,
    y2: cross.y - shape.height - deltaY,
    width: shape.width,
    height: shape.height,
  });

  matrix = flipMatrixHorizontally(matrix);

  copySubMatrix({
    input: matrix,
    output,
    x1: 0,
    y1: 0,
    x2: cross.x + cross.width + deltaX,
    y2: cross.y - shape.height - deltaY,
    width: shape.width,
    height: shape.height,
  });

  matrix = flipMatrixVertically(matrix);

  copySubMatrix({
    input: matrix,
    output,
    x1: 0,
    y1: 0,
    x2: cross.x + cross.width + deltaX,
    y2: cross.y + cross.height + deltaY,
    width: shape.width,
    height: shape.height,
  });

  matrix = flipMatrixHorizontally(matrix);

  copySubMatrix({
    input: matrix,
    output,
    x1: 0,
    y1: 0,
    x2: cross.x - shape.width - deltaX,
    y2: cross.y + cross.height + deltaY,
    width: shape.width,
    height: shape.height,
  });

  return output;
}
