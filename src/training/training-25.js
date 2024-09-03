import buildMatrix from "../buildMatrix";
import copySubMatrix from "../copySubMatrix";
import extractShapes from "../extractShapes";
import getHeight from "../getHeight";
import getWidth from "../getWidth";

export default function (input) {
  const width = getWidth(input);
  const height = getHeight(input);
  const output = buildMatrix(width, height);

  const shapes = extractShapes(input);
  shapes.forEach((shape) => {
    if (shape.color === 0) {
      return;
    }
    if (shape.length > 1) {
      copySubMatrix({
        input,
        output,
        x1: shape.x,
        y1: shape.y,
        width: shape.width,
        height: shape.height,
        x2: shape.x,
        y2: shape.y,
      });
    }

    if (shape.length === 1) {
      let referenceShape = shapes.find(
        (s) => s.color === shape.color && s.length > 1
      );
      if (!referenceShape) {
        return;
      }
      if (referenceShape.width === 1) {
        if (shape.x < referenceShape.x) {
          output[shape.y][referenceShape.x - 1] = shape.color;
        } else {
          output[shape.y][referenceShape.x + 1] = shape.color;
        }
      } else {
        if (shape.y < referenceShape.y) {
          output[referenceShape.y - 1][shape.x] = shape.color;
        } else {
          output[referenceShape.y + 1][shape.x] = shape.color;
        }
      }
    }
  });

  return output;
}
