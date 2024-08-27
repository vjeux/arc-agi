import copyMatrix from "../copyMatrix";
import copySubMatrix from "../copySubMatrix";
import extractShapes from "../extractShapes";
import getBoundingBox from "../getBoundingBox";
import matrixToString from "../matrixToString";

export default function (input) {
  const result = copyMatrix(input);

  const shapes = extractShapes(input);
  for (let i = 0; i < shapes.length; ++i) {
    for (let j = i + 1; j < shapes.length; ++j) {
      const startShape = shapes[i];
      const endShape = shapes[j];
      if (
        startShape.length !== 4 ||
        endShape.length !== 4 ||
        startShape.color !== endShape.color ||
        startShape.color === 0
      ) {
        continue;
      }
      const startBox = getBoundingBox(startShape);
      const endBox = getBoundingBox(endShape);
      const isHorizontal = startBox.y === endBox.y && startBox.x !== endBox.x;
      const isVertical = startBox.x === endBox.x && startBox.y !== endBox.y;

      if (!isHorizontal && !isVertical) {
        continue;
      }

      if (isHorizontal) {
        for (let x = startBox.x + 3; x < endBox.x; x += 3) {
          copySubMatrix({
            input,
            x1: startBox.x,
            y1: startBox.y,
            width: startBox.width,
            height: startBox.height,
            output: result,
            x2: x,
            y2: startBox.y,
          });
        }
      }
      if (isVertical) {
        for (let y = startBox.y + 3; y < endBox.y; y += 3) {
          copySubMatrix({
            input,
            x1: startBox.x,
            y1: startBox.y,
            width: startBox.width,
            height: startBox.height,
            output: result,
            x2: startBox.x,
            y2: y,
          });
        }
      }
    }
  }

  return result;
}
