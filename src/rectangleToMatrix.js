import buildMatrix from "./buildMatrix";
import copySubMatrix from "./copySubMatrix";
export default function rectangleToMatrix({ input, x, y, width, height }) {
  const matrix = buildMatrix(width, height);
  copySubMatrix({
    input,
    x1: x,
    y1: y,
    width: width,
    height: height,
    output: matrix,
    x2: 0,
    y2: 0,
  });
  return matrix;
}
