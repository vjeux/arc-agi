import buildMatrix from "../buildMatrix";
import copySubMatrix from "../copySubMatrix";
import drawLine from "../drawLine";
import drawRectangle from "../drawRectangle";
import extractAnyColorShapes from "../extractAnyColorShapes";
import extractShapes from "../extractShapes";
import replaceColorMatrix from "../replaceColorMatrix";

function shapeToMatrix(input, shape) {
  const output = buildMatrix(shape.width, shape.height);
  copySubMatrix({
    input,
    output,
    width: shape.width,
    height: shape.height,
    x1: shape.x,
    y1: shape.y,
    x2: 0,
    y2: 0,
  });
  return output;
}

export default function (input) {
  const backgroundColor = input[0][0];
  const output = replaceColorMatrix(input, backgroundColor, 0);

  const shapes = extractAnyColorShapes(output);
  const targetShape = shapes.find(
    (s) => s.x !== 0 && s.y !== 0 && output[s.y][s.x] === 0
  );
  const rectangleShapes = shapes.filter(
    (s) => s !== targetShape && s.x !== 0 && s.y !== 0
  );

  rectangleShapes.forEach((rectangleShape) => {
    const matrix = shapeToMatrix(output, rectangleShape);
    const dots = extractShapes(matrix).filter((s) => s.length === 1);
    dots.forEach((dot) => {
      const centerTargetX = targetShape.x + Math.floor(targetShape.width / 2);
      const centerTargetY = targetShape.y + Math.floor(targetShape.height / 2);
      const centerDotX = dot.x - Math.floor(targetShape.width / 2);
      const centerDotY = dot.y - Math.floor(targetShape.height / 2);
      copySubMatrix({
        input: output,
        output: matrix,
        x1: targetShape.x,
        y1: targetShape.y,
        width: targetShape.width,
        height: targetShape.height,
        x2: centerDotX,
        y2: centerDotY,
        overrideBlack: false,
      });

      if (
        output[centerTargetY - 1][centerTargetX] ===
        output[centerTargetY - 2][centerTargetX]
      ) {
        drawLine({
          output: matrix,
          x1: dot.x,
          x2: dot.x,
          y1: 0,
          y2: dot.y - 2,
          color: output[centerTargetY - 1][centerTargetX],
          ignoreOutside: true,
        });
      }

      if (
        output[centerTargetY + 1][centerTargetX] ===
        output[centerTargetY + 2][centerTargetX]
      ) {
        drawLine({
          output: matrix,
          x1: dot.x,
          x2: dot.x,
          y2: rectangleShape.height - 1,
          y1: dot.y + 2,
          color: output[centerTargetY + 1][centerTargetX],
          ignoreOutside: true,
        });
      }

      if (
        output[centerTargetY][centerTargetX - 1] ===
        output[centerTargetY][centerTargetX - 2]
      ) {
        drawLine({
          output: matrix,
          y1: dot.y,
          y2: dot.y,
          x1: 0,
          x2: dot.x - 2,
          color: output[centerTargetY][centerTargetX - 1],
          ignoreOutside: true,
        });
      }
      if (
        output[centerTargetY][centerTargetX + 1] ===
        output[centerTargetY][centerTargetX + 2]
      ) {
        drawLine({
          output: matrix,
          y1: dot.y,
          y2: dot.y,
          x2: rectangleShape.width - 1,
          x1: dot.x + 2,
          color: output[centerTargetY][centerTargetX + 1],
          ignoreOutside: true,
        });
      }
    });

    copySubMatrix({
      input: matrix,
      output: output,
      x1: 0,
      y1: 0,
      x2: rectangleShape.x,
      y2: rectangleShape.y,
      width: rectangleShape.width,
      height: rectangleShape.height,
    });
  });

  drawRectangle({
    output,
    x: targetShape.x,
    y: targetShape.y,
    width: targetShape.width,
    height: targetShape.height,
    color: 0,
  });

  return replaceColorMatrix(output, 0, backgroundColor);
}
