import buildMatrix from "../buildMatrix";
import drawSquare from "../drawSquare";

export default function (input) {
  const output = buildMatrix(9, 9);

  let x1, x2, y1, y2;
  if (input[0][0] === 3) {
    x1 = 0;
    y1 = 0;
    x2 = 4;
    y2 = 4;
  }
  if (input[0][2] === 3) {
    x1 = 5;
    y1 = 0;
    x2 = 1;
    y2 = 4;
  }
  if (input[2][0] === 3) {
    x1 = 0;
    y1 = 5;
    x2 = 4;
    y2 = 5;
  }
  if (input[2][2] === 3) {
    x1 = 5;
    y1 = 5;
    x2 = 1;
    y2 = 1;
  }

  drawSquare({ output, x: x1, y: y1, size: 4, color: 3 });
  drawSquare({ output, x: x2, y: y2, size: 4, color: 3 });

  return output;
}
