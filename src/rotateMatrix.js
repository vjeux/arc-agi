import buildMatrix from "./buildMatrix";
import getWidth from "./getWidth";
import getHeight from "./getHeight";

function rotate(degAngle, x, y) {
  const radAngle = (degAngle * Math.PI) / 180;
  return [
    Math.round(x * Math.cos(radAngle) - y * Math.sin(radAngle)),
    Math.round(x * Math.sin(radAngle) + y * Math.cos(radAngle)),
  ];
}

// Only works with -90 and 90
export default function rotateMatrix(degAngle, input) {
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
