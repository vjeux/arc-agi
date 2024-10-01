import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import getHeight from "../getHeight";
import getWidth from "../getWidth";
import matrixToString from "../matrixToString";

function verifyPattern(input, i, patternLength) {
  const pattern = [];
  for (let j = 0; j < patternLength; ++j) {
    pattern[j] = input[j][i];
  }
  const height = getHeight(input);
  for (let j = 0; j < height; ++j) {
    const inputColor = input[j][i];
    const patternColor = pattern[j % patternLength];
    if (patternColor === 0 && inputColor !== 0) {
      pattern[j % patternLength] = inputColor;
    }
    if (inputColor === 0 || patternColor === 0) {
      continue;
    }
    if (inputColor !== patternColor) {
      return false;
    }
  }
  return true;
}

function getPattern(input, i, patternLength) {
  const height = getHeight(input);
  const output = buildMatrix(1, patternLength);
  for (let j = 0; j < height; ++j) {
    const inputColor = input[j][i];
    if (inputColor === 0) {
      continue;
    }
    output[j % patternLength][i] = inputColor;
  }
  return output;
}

function copyPattern(pattern, output, i, patternLength) {
  const height = getHeight(output);
  for (let j = 0; j < height; ++j) {
    output[j][i] = pattern[j % patternLength][i];
  }
  return output;
}

export default function (input) {
  const output = copyMatrix(input);
  const width = getWidth(input);
  const height = getHeight(input);

  for (let i = 0; i < width; ++i) {
    let patternLength = 1;
    for (; patternLength < height; ++patternLength) {
      if (verifyPattern(input, i, patternLength)) {
        break;
      }
    }

    const pattern = getPattern(input, i, patternLength);
    copyPattern(pattern, output, i, patternLength);
  }

  return output;
}
