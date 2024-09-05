import copyMatrix from "../copyMatrix";
import extractShapes from "../extractShapes";

export default function (input) {
  const output = copyMatrix(input);

  const shapes = extractShapes(input);
  const targetShape = shapes.find((s) => s.color === 8);

  shapes.forEach((shape) => {
    if (shape.color === 0 || shape.color === 8) {
      return;
    }
    if (shape.x < targetShape.x) {
      output[shape.y][targetShape.x] = shape.color;
    }
    if (shape.y < targetShape.y) {
      output[targetShape.y][shape.x] = shape.color;
    }
    if (shape.y > targetShape.y + targetShape.height - 1) {
      output[targetShape.y + targetShape.height - 1][shape.x] = shape.color;
    }
    if (shape.x > targetShape.x + targetShape.width - 1) {
      output[shape.y][targetShape.x + targetShape.width - 1] = shape.color;
    }
  });

  return output;
}
