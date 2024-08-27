import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import matrixToString from "../matrixToString";
import extractShapes from "../extractShapes";
import getBoundingBox from "../getBoundingBox";
import copySubMatrix from "../copySubMatrix";

export default function (input) {
  const result = copyMatrix(input);

  const shapes = extractShapes(input).filter((shape) => shape.color !== 0);
  shapes.sort((a, b) => {
    return a.length - b.length;
  });
  console.log(shapes);

  const colors = [4, 3, 2, 1];
  shapes.forEach((shape, i) => {
    const box = getBoundingBox(shape);
    copySubMatrix({
      input,
      x1: box.x,
      y1: box.y,
      output: result,
      x2: box.x,
      y2: box.y,
      width: box.width,
      height: box.height,
      color: colors[i],
    });
  });

  console.log(matrixToString(input));
  console.log("------");
  console.log(matrixToString(result));
  return result;
}
