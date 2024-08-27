import copyMatrix from "../copyMatrix";
import extractShapes from "../extractShapes";
import matrixToString from "../matrixToString";

function drawLine({ output, x1, y1, x2, y2, color }) {
  const totalX = x2 - x1;
  const totalY = y2 - y1;
  const total = Math.max(totalX, totalY) + 1;

  const stepX = Math.sign(totalX);
  const stepY = Math.sign(totalY);
  for (let i = 0; i < total; i++) {
    output[y1 + stepY * i][x1 + stepX * i] = color;
  }
}

export default function (input) {
  const result = copyMatrix(input);

  const shapes = extractShapes(input);
  shapes.forEach((shape) => {
    if (shape.length !== 1) {
      return;
    }
    const insideColor = shape.color;
    const outsideColor = input[shape[0].y - 1][shape[0].x];

    drawLine({
      output: result,
      x1: shape[0].x - 2,
      y1: shape[0].y,
      x2: shape[0].x + 2,
      y2: shape[0].y,
      color: outsideColor,
    });
    drawLine({
      output: result,
      x1: shape[0].x,
      y1: shape[0].y - 2,
      x2: shape[0].x,
      y2: shape[0].y + 2,
      color: outsideColor,
    });
    drawLine({
      output: result,
      x1: shape[0].x - 2,
      y1: shape[0].y - 2,
      x2: shape[0].x + 2,
      y2: shape[0].y + 2,
      color: insideColor,
    });
    drawLine({
      output: result,
      x1: shape[0].x - 2,
      y1: shape[0].y + 2,
      x2: shape[0].x + 2,
      y2: shape[0].y - 2,
      color: insideColor,
    });
  });

  console.log(matrixToString(input));
  console.log("------");
  console.log(matrixToString(result));
  return result;
}
