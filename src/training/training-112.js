import copyMatrix from "../copyMatrix";
import copySubMatrix from "../copySubMatrix";
import extractShapes from "../extractShapes";
import flipMatrixHorizontally from "../flipMatrixHorizontally";
import flipMatrixVertically from "../flipMatrixVertically";
import shapeToMatrix from "../shapeToMatrix";

export default function (input) {
  const output = copyMatrix(input);
  const shapes = extractShapes(input);
  const redShape = shapes.find((s) => s.color === 2);
  const greenShape = shapes.find((s) => s.color === 3);

  let matrix = shapeToMatrix(input, redShape);

  matrix = flipMatrixHorizontally(matrix);

  copySubMatrix({
    input: matrix,
    output,
    x1: 0,
    y1: 0,
    x2: redShape.x + redShape.width + greenShape.width,
    y2: redShape.y,
    width: redShape.width,
    height: redShape.height,
  });

  matrix = flipMatrixVertically(matrix);

  copySubMatrix({
    input: matrix,
    output,
    x1: 0,
    y1: 0,
    x2: redShape.x + redShape.width + greenShape.width,
    y2: redShape.y + redShape.height + greenShape.height,
    width: redShape.width,
    height: redShape.height,
  });

  matrix = flipMatrixHorizontally(matrix);

  copySubMatrix({
    input: matrix,
    output,
    x1: 0,
    y1: 0,
    x2: redShape.x,
    y2: redShape.y + redShape.height + greenShape.height,
    width: redShape.width,
    height: redShape.height,
  });

  return output;
}
