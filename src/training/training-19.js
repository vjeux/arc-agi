import buildMatrix from "../buildMatrix";
import getWidth from "../getWidth";
import getHeight from "../getHeight";
import copySubMatrix from "../copySubMatrix";
import forEachDiagonal from "../forEachDiagonal";
import forEachPixel from "../forEachPixel";
import forEachDiagonal from "../forEachDiagonal";
import setColor from "../setColor";
import getColor from "../getColor";

export default function (input) {
  const width = getWidth(input);
  const height = getHeight(input);
  const outputWidth = width * 2;
  const outputHeight = height * 2;
  const output = buildMatrix(outputWidth, outputHeight);
  copySubMatrix({
    input,
    x1: 0,
    y1: 0,
    width,
    height,
    output,
    x2: 0,
    y2: 0,
  });
  copySubMatrix({
    input,
    x1: 0,
    y1: 0,
    width,
    height,
    output,
    x2: width,
    y2: 0,
  });
  copySubMatrix({
    input,
    x1: 0,
    y1: 0,
    width,
    height,
    output,
    x2: 0,
    y2: height,
  });
  copySubMatrix({
    input,
    x1: 0,
    y1: 0,
    width,
    height,
    output,
    x2: width,
    y2: height,
  });

  forEachPixel(output, (color, i, j) => {
    if (color === 0 || color === 8) {
      return;
    }
    forEachDiagonal((x, y) => {
      if (!getColor(output, i + x, j + y)) {
        setColor({ output, x: i + x, y: j + y, color: 8, ignoreOutside: true });
      }
    });
  });

  return output;
}
