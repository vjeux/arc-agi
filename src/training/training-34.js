import buildMatrix from "../buildMatrix";
import extractAnyColorShapes from "../extractAnyColorShapes";
import drawForEach from "../drawForEach";
import forEach22Square from "../forEach22Square";

export default function (input) {
  const shape = extractAnyColorShapes(input).find((s) => s.color !== 0);
  let color;
  shape.forEach((pixel) => {
    if (input[pixel.y][pixel.x] !== 2) {
      color = input[pixel.y][pixel.x];
    }
  });

  const output = buildMatrix(9, 9);

  if (input[shape.y][shape.x] === 2) {
    for (let i = 0; i < 9; ++i) {
      drawForEach({
        output,
        x: shape.x - i,
        y: shape.y - i,
        forEach: forEach22Square,
        color,
        ignoreOutside: true,
      });
    }
  }
  if (input[shape.y][shape.x + 1] === 2) {
    for (let i = 0; i < 9; ++i) {
      drawForEach({
        output,
        x: shape.x + i,
        y: shape.y - i,
        forEach: forEach22Square,
        color,
        ignoreOutside: true,
      });
    }
  }
  if (input[shape.y + 1][shape.x] === 2) {
    for (let i = 0; i < 9; ++i) {
      drawForEach({
        output,
        x: shape.x - i,
        y: shape.y + i,
        forEach: forEach22Square,
        color,
        ignoreOutside: true,
      });
    }
  }
  if (input[shape.y + 1][shape.x + 1] === 2) {
    for (let i = 0; i < 9; ++i) {
      drawForEach({
        output,
        x: shape.x + i,
        y: shape.y + i,
        forEach: forEach22Square,
        color,
        ignoreOutside: true,
      });
    }
  }
  return output;
}
