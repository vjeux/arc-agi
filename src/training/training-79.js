import buildMatrix from "../buildMatrix";
import extractShapes from "../extractShapes";
import copySubMatrix from "../copySubMatrix";

export default function (input) {
  const output = buildMatrix(3, 3);
  const shapes = extractShapes(input).filter((s) => s.color !== 0);
  shapes.forEach((shape) => {
    shape.count = shapes.filter((s) => s.color === shape.color).length;
  });

  const shape = shapes.find((s) => !shapes.find((ss) => ss.count > s.count));

  copySubMatrix({
    input,
    output,
    x1: shape.x,
    y1: shape.y,
    x2: 0,
    y2: 0,
    width: shape.width,
    height: shape.height,
  });

  return output;
}
