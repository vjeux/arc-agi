import buildMatrix from "../buildMatrix";
import copySubMatrix from "../copySubMatrix";
import extractAnyColorShapes from "../extractAnyColorShapes";

export default function (input) {
  const shapes = extractAnyColorShapes(input)
    .filter((s) => s.color !== 0)
    .sort((a, b) => a.x - b.x);

  const width = shapes.map((s) => s.width).reduce((a, b) => a + b, 0);
  const output = buildMatrix(width, 3);

  let color;
  shapes[0].forEach((p) => {
    if (input[p.y][p.x] !== 5) {
      color = input[p.y][p.x];
    }
  });

  let shape = shapes[0];
  copySubMatrix({
    input,
    output,
    x1: shape.x,
    y1: shape.y,
    x2: shape.x,
    y2: shape.y,
    width: shape.width,
    height: shape.height,
    color,
  });

  let currentLeft = shapes[0].width;
  let heightDelta = 0;
  for (let i = 1; i < shapes.length; ++i) {
    const previousShape = shapes[i - 1];
    const shape = shapes[i];

    const previousGray = previousShape.find(
      (p) =>
        p.x === previousShape.x + previousShape.width - 1 &&
        input[p.y][p.x] === 5
    );
    const currentGray = shape.find(
      (p) => p.x === shape.x && input[p.y][p.x] === 5
    );

    heightDelta += currentGray.y - previousGray.y;

    let color;
    shape.forEach((p) => {
      if (input[p.y][p.x] !== 5) {
        color = input[p.y][p.x];
      }
    });

    copySubMatrix({
      input,
      output,
      x1: shape.x,
      y1: shape.y,
      x2: currentLeft,
      y2: shape.y - heightDelta,
      width: shape.width,
      height: shape.height,
      color,
    });

    currentLeft += shape.width;
  }

  return output;
}
