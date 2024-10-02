import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import extractShapes from "../extractShapes";

export default function (input) {
  const shapes = extractShapes(input);

  const count = shapes.length;
  const isHorizontal = shapes[0].y === shapes[1].y;

  const output = buildMatrix(
    isHorizontal ? count : 1,
    !isHorizontal ? count : 1
  );

  shapes.forEach((shape, i) => {
    output[isHorizontal ? 0 : i][!isHorizontal ? 0 : i] = shape.color;
  });

  return output;
}
