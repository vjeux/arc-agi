import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import copySubMatrix from "../copySubMatrix";
import extractAnyColorShapes from "../extractAnyColorShapes";
import extractShapes from "../extractShapes";
import shapeToMatrix from "../shapeToMatrix";

export default function (input) {
  const output = buildMatrix(3, 3);

  const shapes = extractAnyColorShapes(input).filter(
    (shape) => shape.color !== 0
  );
  shapes.forEach((shape) => {
    const matrix = shapeToMatrix(input, shape);
    const grayPosition = extractShapes(matrix).find(
      (shape) => shape.color === 5
    );
    copySubMatrix({
      input,
      x1: shape.x,
      y1: shape.y,
      width: shape.width,
      height: shape.height,
      output,
      x2: 1 - grayPosition.x,
      y2: 1 - grayPosition.y,
      overrideBlack: false,
    });
  });

  return output;
}
