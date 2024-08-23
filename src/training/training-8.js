import buildMatrix from "../buildMatrix";
import getBoundingBox from "../getBoundingBox";
import getWidth from "../getWidth";
import getHeight from "../getHeight";
import copySubMatrix from "../copySubMatrix";
import extractShapes from "../extractShapes";
import matrixToString from "../matrixToString";

function checkOverlap(A, B) {
  return A.start <= B.end && B.start <= A.end;
}

export default function (input) {
  const width = getWidth(input);
  const height = getHeight(input);
  const result = buildMatrix(width, height);

  const shapes = extractShapes(input);
  let redBox = getBoundingBox(shapes.find((shape) => shape.color === 2));
  let blueBox = getBoundingBox(shapes.find((shape) => shape.color === 8));

  const isVertical = checkOverlap(
    {
      start: redBox.x,
      end: redBox.x + redBox.width,
    },
    {
      start: blueBox.x,
      end: blueBox.x + blueBox.width,
    }
  );

  if (isVertical) {
    if (redBox.y < blueBox.y) {
      copySubMatrix({
        input,
        x1: redBox.x,
        y1: redBox.y,
        width: redBox.width,
        height: redBox.height,
        output: result,
        x2: redBox.x,
        y2: blueBox.y - redBox.height,
      });
    } else {
      copySubMatrix({
        input,
        x1: redBox.x,
        y1: redBox.y,
        width: redBox.width,
        height: redBox.height,
        output: result,
        x2: redBox.x,
        y2: blueBox.y + blueBox.height,
      });
    }
  } else {
    if (redBox.x < blueBox.x) {
      copySubMatrix({
        input,
        x1: redBox.x,
        y1: redBox.y,
        width: redBox.width,
        height: redBox.height,
        output: result,
        x2: blueBox.x - redBox.width,
        y2: redBox.y,
      });
    } else {
      copySubMatrix({
        input,
        x1: redBox.x,
        y1: redBox.y,
        width: redBox.width,
        height: redBox.height,
        output: result,
        x2: blueBox.x + redBox.width,
        y2: redBox.y,
      });
    }
  }

  copySubMatrix({
    input,
    x1: blueBox.x,
    y1: blueBox.y,
    width: blueBox.width,
    height: blueBox.height,
    output: result,
    x2: blueBox.x,
    y2: blueBox.y,
  });

  return result;
}
