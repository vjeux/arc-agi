import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import extractShapes from "../extractShapes";
import scaleMatrix from "../scaleMatrix";
import setColor from "../setColor";

export default function (input) {
  const shapes = extractShapes(input);
  const colors = {};
  shapes
    .filter((s) => s.color !== 0)
    .forEach((shape) => {
      colors[shape.color] = true;
    });
  const colorCount = Object.keys(colors).length;

  const output = scaleMatrix(input, colorCount);

  const square = shapes.find(
    (s) => s.color !== 0 && s.width === 2 && s.height === 2
  );

  for (let i = 0; i < colorCount; ++i) {
    setColor({
      output,
      x: square.x * colorCount - i - 1,
      y: square.y * colorCount - i - 1,
      color: 2,
      ignoreOutside: true,
    });
    setColor({
      output,
      x: (square.x + square.width) * colorCount + i,
      y: (square.y + square.height) * colorCount + i,
      color: 2,
      ignoreOutside: true,
    });
    setColor({
      output,
      x: square.x * colorCount - i - 1,
      y: (square.y + square.height) * colorCount + i,
      color: 2,
      ignoreOutside: true,
    });
    setColor({
      output,
      x: (square.x + square.width) * colorCount + i,
      y: square.y * colorCount - i - 1,
      color: 2,
      ignoreOutside: true,
    });
  }

  return output;
}
