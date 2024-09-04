import buildMatrix from "../buildMatrix";
import copySubMatrix from "../copySubMatrix";
import extractShapes from "../extractShapes";

export default function (input) {
  const shapes = extractShapes(input);
  let foundShape = null;
  shapes.forEach((shape) => {
    if (foundShape) {
      return;
    }
    if (shapes.find((s) => s !== shape && s.color === shape.color)) {
      return;
    }
    foundShape = shape;
  });

  const output = buildMatrix(foundShape.width - 2, foundShape.height - 2);
  copySubMatrix({
    input,
    output,
    x1: foundShape.x + 1,
    y1: foundShape.y + 1,
    width: foundShape.width - 2,
    height: foundShape.height - 2,
    x2: 0,
    y2: 0,
  });

  return output;
}
