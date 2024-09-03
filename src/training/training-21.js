import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import extractShapes from "../extractShapes";
import forEachPixel from "../forEachPixel";
import forEachSide from "../forEachSide";
import matrixToString from "../matrixToString";

export default function (input) {
  const shapes = extractShapes(input);
  let height = null;
  shapes.forEach((shape, i) => {
    if (height === null && i > 0 && shape.y < shapes[i - 1].y) {
      height = i - 1;
    }
  });
  let width = (shapes.length - 1) / height;
  let color = shapes[0].color;
  const output = buildMatrix(width, height);
  forEachPixel(output, (_, x, y) => {
    output[y][x] = color;
  });

  return output;
}
