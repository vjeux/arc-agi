import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import drawSquare from "../drawSquare";
import extractShapes from "../extractShapes";

export default function (input) {
  const output = copyMatrix(input);

  extractShapes(input)
    .filter((s) => s.color === 5)
    .forEach((dot) => {
      drawSquare({
        output,
        x: dot.x - 1,
        y: dot.y - 1,
        size: 3,
        color: 1,
      });
      output[dot.y][dot.x] = 5;
    });

  return output;
}
