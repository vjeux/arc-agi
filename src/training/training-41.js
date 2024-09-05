import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import extractShapes from "../extractShapes";

export default function (input) {
  const output = copyMatrix(input);

  const shapes = extractShapes(input);
  shapes.forEach((shape) => {
    if (shape.color === 0) {
      return;
    }

    for (let y = 0; y < shape.height - 2; ++y) {
      let shouldStartPainting = false;
      for (let x = 0; x < shape.width; ++x) {
        if (input[shape.y + y][shape.x + x] !== 0) {
          if (shouldStartPainting === false) {
            shouldStartPainting = true;
          } else if (shouldStartPainting === true) {
            break;
          }
        }
        if (shouldStartPainting === true) {
          output[shape.y + y][shape.x + x] = shape.color;
        }
      }
    }
  });

  return output;
}
