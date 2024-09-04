import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import extractAnyColorShapes from "../extractAnyColorShapes";
import fillForEachIgnoreOutside from "../fillForEachIgnoreOutside";
import forEach22Square from "../forEach22Square";

export default function (input) {
  const output = buildMatrix(9, 9);

  const shape = extractAnyColorShapes(input).find((s) => s.color !== 0);
  let color;
  shape.forEach((pixel) => {
    if (input[pixel.y][pixel.x] !== 2) {
      color = input[pixel.y][pixel.x];
    }
  });
  console.log(shape, color);

  if (input[shape.y][shape.x] === 2) {
    for (let i = 0; i < 9; ++i) {
      fillForEachIgnoreOutside(
        output,
        shape.x - i,
        shape.y - i,
        forEach22Square,
        color
      );
    }
  }
  return output;
}
