import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import copySubMatrix from "../copySubMatrix";
import drawLine from "../drawLine";
import extractShapes from "../extractShapes";
import getHeight from "../getHeight";
import getWidth from "../getWidth";
import matrixToString from "../matrixToString";

export default function (input) {
  const width = getWidth(input);
  const height = getHeight(input);
  const output = copyMatrix(input);

  let max = 0;
  for (let i = 0; i < width; ++i) {
    const line = buildMatrix(1, height);
    copySubMatrix({
      input,
      output: line,
      width: 1,
      height,
      x1: i,
      y1: 0,
      x2: 0,
      y2: 0,
    });
    const shapes = extractShapes(line);
    const longestBlack = shapes
      .filter((s) => s.color === 0)
      .sort((a, b) => b.length - a.length)[0];
    if (longestBlack && longestBlack.length > max) {
      max = longestBlack.length;
    }
  }

  for (let i = 0; i < width; ++i) {
    const line = buildMatrix(1, height);
    copySubMatrix({
      input,
      output: line,
      width: 1,
      height,
      x1: i,
      y1: 0,
      x2: 0,
      y2: 0,
    });
    const shapes = extractShapes(line);
    const longestBlack = shapes
      .filter((s) => s.color === 0)
      .sort((a, b) => b.length - a.length)[0];
    if (longestBlack && longestBlack.length === max) {
      drawLine({
        output,
        x1: i,
        x2: i,
        y1: longestBlack.y,
        y2: longestBlack.y + longestBlack.height - 1,
        color: 3,
      });
    }
  }

  max = 0;
  for (let i = 0; i < height; ++i) {
    const line = buildMatrix(width, 1);
    copySubMatrix({
      input,
      output: line,
      width,
      height: 1,
      x1: 0,
      y1: i,
      x2: 0,
      y2: 0,
    });
    const shapes = extractShapes(line);
    const longestBlack = shapes
      .filter((s) => s.color === 0)
      .sort((a, b) => b.length - a.length)[0];
    if (longestBlack && longestBlack.length > max) {
      max = longestBlack.length;
    }
  }

  for (let i = 0; i < height; ++i) {
    const line = buildMatrix(width, 1);
    copySubMatrix({
      input,
      output: line,
      width,
      height: 1,
      x1: 0,
      y1: i,
      x2: 0,
      y2: 0,
    });
    const shapes = extractShapes(line);
    const longestBlack = shapes
      .filter((s) => s.color === 0)
      .sort((a, b) => b.length - a.length)[0];
    if (longestBlack && longestBlack.length === max) {
      drawLine({
        output,
        y1: i,
        y2: i,
        x1: longestBlack.x,
        x2: longestBlack.x + longestBlack.width - 1,
        color: 3,
      });
    }
  }

  return output;
}
