import copyMatrix from "../copyMatrix";
import extractShapes from "../extractShapes";

export default function (input) {
  const output = copyMatrix(input);

  const shapes = extractShapes(input);
  shapes
    .filter((s) => s.color === 1)
    .forEach((shape) => {
      const dot = shapes.find(
        (s) =>
          s.length === 1 &&
          s.color !== 0 &&
          s.x >= shape.x &&
          s.y >= shape.y &&
          s.x + s.width <= shape.x + shape.width &&
          s.y + s.height <= shape.y + shape.height
      );
      for (let i = shape.x; i < shape.x + shape.width; ++i) {
        for (let j = shape.y - 1; j < shape.y + shape.height; ++j) {
          if (output[j][i] === 0) {
            output[j][i] = dot.color;
          }
        }
      }
    });

  return output;
}
