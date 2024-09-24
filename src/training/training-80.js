import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import copySubMatrix from "../copySubMatrix";
import extractShapes from "../extractShapes";
import getColor from "../getColor";

export default function (input) {
  const output = copyMatrix(input);

  const shapes = extractShapes(input);
  const squareSize = shapes[0].width;

  const dots = shapes.filter((shape) => {
    if (shape.width !== squareSize) {
      return false;
    }
    if (shape.color === 0) {
      return false;
    }

    if (
      !getColor(input, shape.x - 2, shape.y - 2) &&
      !getColor(input, shape.x - 2, shape.y) &&
      !getColor(input, shape.x - 2, shape.y + squareSize + 1) &&
      !getColor(input, shape.x, shape.y - 2) &&
      !getColor(input, shape.x, shape.y + squareSize + 1) &&
      !getColor(input, shape.x + squareSize + 1, shape.y - 2) &&
      !getColor(input, shape.x + squareSize + 1, shape.y) &&
      !getColor(input, shape.x + squareSize + 1, shape.y + squareSize + 1)
    ) {
      return true;
    }
    return false;
  });

  const template = shapes.find(
    (s) =>
      s.width === squareSize &&
      s.color === dots[0].color &&
      !dots.find((ss) => ss === s)
  );

  dots.forEach((dot) => {
    copySubMatrix({
      input,
      output,
      x1: template.x - squareSize - 1,
      y1: template.y - squareSize - 1,
      width: squareSize * 3 + 2,
      height: squareSize * 3 + 2,
      x2: dot.x - squareSize - 1,
      y2: dot.y - squareSize - 1,
    });
  });

  return output;
}
