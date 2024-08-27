import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import drawLine from "../drawLine";
import extractShapes from "../extractShapes";
import getHeight from "../getHeight";
import getWidth from "../getWidth";

function rotate(degAngle, x, y) {
  const radAngle = (degAngle * Math.PI) / 180;
  return [
    Math.round(x * Math.cos(radAngle) - y * Math.sin(radAngle)),
    Math.round(x * Math.sin(radAngle) + y * Math.cos(radAngle)),
  ];
}

// Only works with -90 and 90
function rotateMatrix(degAngle, input) {
  const inputWidth = getWidth(input);
  const inputHeight = getHeight(input);

  const output = buildMatrix(inputHeight, inputWidth);

  for (let i = 0; i < inputWidth; i++) {
    for (let j = 0; j < inputHeight; ++j) {
      let [xx, yy] = rotate(degAngle, i, j);
      if (degAngle === -90) {
        yy += inputWidth - 1;
      }
      if (degAngle === 90) {
        xx += inputHeight - 1;
      }
      output[yy][xx] = input[j][i];
    }
  }

  return output;
}

export default function training13(input) {
  const output = copyMatrix(input);

  const shapes = extractShapes(input);
  const newShapes = shapes.filter((shape) => shape.length === 1);
  newShapes.sort((a, b) => a[0].x - b[0].x);

  const width = getWidth(input);
  const height = getHeight(input);

  if (newShapes[0][0].x === 0 || newShapes[0][0].x === width - 1) {
    return rotateMatrix(90, training13(rotateMatrix(-90, input)));
  }

  const startX = newShapes[0][0].x;
  const deltaX = newShapes[1][0].x - newShapes[0][0].x;
  const colors = [newShapes[0].color, newShapes[1].color];

  let i = 0;
  for (let x = startX; x < width; x += deltaX) {
    drawLine({
      output,
      x1: x,
      y1: 0,
      x2: x,
      y2: height - 1,
      color: colors[i % 2],
    });
    i++;
  }

  return output;
}
