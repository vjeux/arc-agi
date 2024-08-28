import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import getHeight from "../getHeight";
import getWidth from "../getWidth";

function verifyPattern(input, patternLength) {
  const width = getWidth(input);
  const height = getHeight(input);
  for (let i = 0; i < width; ++i) {
    for (let j = 0; j < height; ++j) {
      const inputColor = input[j][i];
      const patternColor = input[j % patternLength][i % patternLength];
      if (inputColor === 0 || patternColor === 0) {
        continue;
      }
      if (inputColor !== patternColor) {
        return false;
      }
    }
  }
  return true;
}

function getPattern(input, patternLength) {
  const width = getWidth(input);
  const height = getHeight(input);
  const output = buildMatrix(patternLength, patternLength);
  for (let i = 0; i < width; ++i) {
    for (let j = 0; j < height; ++j) {
      const inputColor = input[j][i];
      if (inputColor === 0) {
        continue;
      }
      output[j % patternLength][i % patternLength] = inputColor;
    }
  }
  return output;
}

function copyPattern(pattern, output, patternLength) {
  const width = getWidth(output);
  const height = getHeight(output);
  for (let i = 0; i < width; ++i) {
    for (let j = 0; j < height; ++j) {
      output[j][i] = pattern[j % patternLength][i % patternLength];
    }
  }
  return output;
}

export default function (input) {
  const output = copyMatrix(input);
  const width = getWidth(input);

  let patternLength = 1;
  for (; patternLength < width; ++patternLength) {
    if (verifyPattern(input, patternLength)) {
      break;
    }
  }

  const pattern = getPattern(input, patternLength);
  copyPattern(pattern, output, patternLength);

  return output;
}
