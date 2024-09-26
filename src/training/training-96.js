import buildMatrix from "../buildMatrix";
import drawLine from "../drawLine";
import drawSquare from "../drawSquare";
import extractShapes from "../extractShapes";
import forEachMatrix from "../forEachMatrix";

export default function (input) {
  let maxDimension = 0;
  const backgroundColor = input[0][0];
  const shapes = extractShapes(input).filter(
    (s) => s.color !== backgroundColor
  );

  const dot = shapes.find(
    (s) =>
      s.length === 1 && !shapes.find((ss) => s !== ss && s.color === ss.color)
  );
  const square = shapes.find(
    (s) =>
      s.width === 3 &&
      s.height === 3 &&
      !shapes.find((ss) => s.color === ss.color && s !== ss)
  );

  const dimensions = {};
  shapes.forEach((shape) => {
    {
      const otherShape = shapes.find(
        (s) =>
          s.y === shape.y &&
          s !== shape &&
          s.x > shape.x &&
          shape.width > 1 &&
          s.color === shape.color
      );
      if (otherShape) {
        if (input[shape.y][shape.x + 1] !== backgroundColor) {
          const coloredLength = Math.max(shape.width, otherShape.width);
          const gapLength = otherShape.x - shape.x - shape.width;
          const dimension = 2 * coloredLength + gapLength;

          if (dimension > maxDimension) {
            maxDimension = dimension;
          }

          dimensions[dimension] = {
            coloredLength,
            gapLength,
            color: shape.color,
          };
        }
      }
    }
    {
      const otherShape = shapes.find(
        (s) =>
          s.x === shape.x &&
          s !== shape &&
          s.y > shape.y &&
          (s.height > 1 || shape.height > 1) &&
          s.color === shape.color
      );
      if (otherShape) {
        if (
          input[shape.y + 1][shape.x] !== backgroundColor ||
          input[otherShape.y + otherShape.height - 2][otherShape.x] !==
            backgroundColor ||
          input[shape.y + 1][shape.x + shape.width - 1] !== backgroundColor ||
          input[otherShape.y + otherShape.height - 2][
            otherShape.x + shape.width - 1
          ] !== backgroundColor
        ) {
          const coloredLength = Math.max(shape.height, otherShape.height);
          const gapLength = otherShape.y - shape.y - shape.height;
          const dimension = 2 * coloredLength + gapLength;

          if (dimension > maxDimension) {
            maxDimension = dimension;
          }
          dimensions[dimension] = {
            coloredLength,
            gapLength,
            color: shape.color,
          };
        }
      }
    }
  });

  const output = buildMatrix(maxDimension, maxDimension);
  forEachMatrix(output, (_, x, y) => {
    output[y][x] = backgroundColor;
  });

  drawSquare({
    output,
    x: Math.floor(maxDimension / 2) - 1,
    y: Math.floor(maxDimension / 2) - 1,
    size: 3,
    color: square.color,
  });
  output[Math.floor(maxDimension / 2)][Math.floor(maxDimension / 2)] = dot
    ? dot.color
    : backgroundColor;

  Object.keys(dimensions).forEach((dimension) => {
    const rect = dimensions[dimension];

    const start = Math.floor(maxDimension / 2) - Math.floor(dimension / 2);
    const end = start + +dimension;
    drawLine({
      output,
      x1: start,
      x2: start + rect.coloredLength - 1,
      y1: start,
      y2: start,
      color: rect.color,
    });
    drawLine({
      output,
      y1: start,
      y2: start + rect.coloredLength - 1,
      x1: start,
      x2: start,
      color: rect.color,
    });

    drawLine({
      output,
      x1: end - rect.coloredLength,
      x2: end - 1,
      y1: start,
      y2: start,
      color: rect.color,
    });
    drawLine({
      output,
      y1: end - rect.coloredLength,
      y2: end - 1,
      x1: start,
      x2: start,
      color: rect.color,
    });

    drawLine({
      output,
      x1: end - rect.coloredLength,
      x2: end - 1,
      y1: end - 1,
      y2: end - 1,
      color: rect.color,
    });
    drawLine({
      output,
      y1: end - rect.coloredLength,
      y2: end - 1,
      x1: end - 1,
      x2: end - 1,
      color: rect.color,
    });

    drawLine({
      output,
      x1: end - 1,
      x2: end - 1,
      y1: start,
      y2: start + rect.coloredLength - 1,
      color: rect.color,
    });
    drawLine({
      output,
      y1: end - 1,
      y2: end - 1,
      x1: start,
      x2: start + rect.coloredLength - 1,
      color: rect.color,
    });
  });

  return output;
}
