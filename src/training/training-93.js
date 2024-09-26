import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import extractShapes from "../extractShapes";
import findNextBlockInLine from "../findNextBlockInLine";

export default function (input) {
  const output = copyMatrix(input);

  const shapes = extractShapes(input);
  const grayShape = shapes.find((s) => s.color === 5);
  const dots = shapes.filter((s) => s.color !== 0 && s.length === 1);

  dots.forEach((dot) => {
    output[dot.y][dot.x] = 0;

    if (grayShape.x === 0 && dot.y < grayShape.y) {
      const gray = findNextBlockInLine(output, dot.x, dot.y, 0, 1, 5);
      output[gray.y - 1][gray.x] = 5;
    }
    if (grayShape.x === 0 && dot.y > grayShape.y) {
      const gray = findNextBlockInLine(output, dot.x, dot.y, 0, -1, 5);
      output[gray.y + 1][gray.x] = 5;
    }

    if (grayShape.y === 0 && dot.x < grayShape.x) {
      const gray = findNextBlockInLine(output, dot.x, dot.y, 1, 0, 5);
      output[gray.y][gray.x - 1] = 5;
    }
    if (grayShape.y === 0 && dot.x > grayShape.x) {
      const gray = findNextBlockInLine(output, dot.x, dot.y, -1, 0, 5);
      output[gray.y][gray.x + 1] = 5;
    }
  });

  return output;
}
