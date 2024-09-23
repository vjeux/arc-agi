import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import copySubMatrix from "../copySubMatrix";
import extractShapes from "../extractShapes";

export default function (input) {
  const output = copyMatrix(input);

  extractShapes(input)
    .filter((s) => s.color === 1)
    .forEach((dot) => {
      copySubMatrix({
        input,
        output,
        x1: 0,
        y1: 0,
        x2: dot.x - 1,
        y2: dot.y - 1,
        width: 3,
        height: 3,
      });
    });

  return output;
}
