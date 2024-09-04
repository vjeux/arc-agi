import copyMatrix from "../copyMatrix";
import copySubMatrix from "../copySubMatrix";
import extractShapes from "../extractShapes";
import getWidth from "../getWidth";
import getHeight from "../getHeight";
import rotateMatrix from "../rotateMatrix";

export default function (input) {
  const output = copyMatrix(input);

  const rotatedInput = rotateMatrix(90, input);
  const shapeRotated = extractShapes(rotatedInput).find((s) => s.color === 1);

  copySubMatrix({
    input: rotatedInput,
    x1: 0,
    y1: 0,
    output,
    x2: shapeRotated.width === 9 ? 1 : 0,
    y2: 0,
    width: getWidth(rotatedInput),
    height: getHeight(rotatedInput),
    overrideBlack: false,
    overrideColor: false,
    color: 2,
  });

  return output;
}
