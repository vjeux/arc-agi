import copyMatrix from "../copyMatrix";
import copySubMatrix from "../copySubMatrix";
import drawRectangle from "../drawRectangle";
import extractShapes from "../extractShapes";

export default function (input) {
  const output = copyMatrix(input);

  const shapes = extractShapes(input);

  const grayShapes = shapes.filter((s) => s.color === 5);
  grayShapes.forEach((grayShape) => {
    const blackShape = shapes.find(
      (s) =>
        s.x > grayShape.x &&
        s.y > grayShape.y &&
        s.x + s.width < grayShape.x + grayShape.width &&
        s.y + s.height < grayShape.y + grayShape.height
    );

    const coloredShape = shapes.find(
      (s) =>
        s.color !== 0 &&
        s.length === blackShape.length &&
        s.width === blackShape.width &&
        s.height === blackShape.height
    );

    copySubMatrix({
      input,
      output,
      x1: coloredShape.x,
      y1: coloredShape.y,
      x2: blackShape.x,
      y2: blackShape.y,
      width: coloredShape.width,
      height: coloredShape.height,
      overrideBlack: false,
    });

    drawRectangle({
      output,
      x: coloredShape.x,
      y: coloredShape.y,
      width: coloredShape.width,
      height: coloredShape.height,
      color: 0,
      ignoreOutside: true,
    });
  });

  return output;
}
