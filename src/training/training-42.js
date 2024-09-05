import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import drawSquareIgnoreOutside from "../drawSquareIgnoreOutside";
import extractShapes from "../extractShapes";

export default function (input) {
  const output = copyMatrix(input);
  const shapes = extractShapes(input);
  shapes.forEach((shape) => {
    if (shape.color === 0) {
      return;
    }
    const size = shape.width / 2;
    if (input[shape.y][shape.x] === 0) {
      drawSquareIgnoreOutside({
        output,
        x: shape.x - size,
        y: shape.y - size,
        size,
        color: 8,
      });
      drawSquareIgnoreOutside({
        output,
        x: shape.x + shape.width,
        y: shape.y + shape.height,
        size,
        color: 8,
      });
    } else {
      drawSquareIgnoreOutside({
        output,
        x: shape.x + shape.width,
        y: shape.y - size,
        size,
        color: 8,
      });
      drawSquareIgnoreOutside({
        output,
        x: shape.x - size,
        y: shape.y + shape.height,
        size,
        color: 8,
      });
    }
  });

  return output;
}
