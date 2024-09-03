import buildMatrix from "./buildMatrix";
import copySubMatrix from "./copySubMatrix";
export default function shapeToMatrix(input, shape) {
  const matrix = buildMatrix(shape.width, shape.height);
  copySubMatrix({
    input,
    x1: shape.x,
    y1: shape.y,
    width: shape.width,
    height: shape.height,
    output: matrix,
    x2: 0,
    y2: 0,
  });
  return matrix;
}
