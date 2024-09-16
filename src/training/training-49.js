import buildMatrix from "../buildMatrix";
import copySubMatrix from "../copySubMatrix";
import extractShapes from "../extractShapes";

export default function (input) {
  const shapes = extractShapes(input);
  const shape = shapes.find(
    (s) =>
      s.color !== 0 &&
      shapes.find(
        (ss) => ss.length < s.length && ss !== s && ss.color !== 0
      ) === undefined
  );
  const output = buildMatrix(shape.width, shape.height);
  copySubMatrix({
    input,
    x1: shape.x,
    y1: shape.y,
    width: shape.width,
    height: shape.height,
    output,
    x2: 0,
    y2: 0,
  });

  return output;
}
