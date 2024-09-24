import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import copySubMatrix from "../copySubMatrix";
import extractShapes from "../extractShapes";

export default function (input) {
  const dots = extractShapes(input).filter(
    (s) => s.color !== 0 && s.length === 1
  );
  const color = dots[0].color;
  const coloredDots = dots.filter((s) => s.color === color);

  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;

  coloredDots.forEach((dot) => {
    minX = Math.min(minX, dot.x);
    minY = Math.min(minY, dot.y);
    maxX = Math.max(maxX, dot.x);
    maxY = Math.max(maxY, dot.y);
  });

  const width = maxX - minX - 1;
  const height = maxY - minY - 1;

  const output = buildMatrix(width, height);

  copySubMatrix({
    input,
    output,
    x1: minX + 1,
    y1: minY + 1,
    width,
    height,
    x2: 0,
    y2: 0,
    color,
  });

  return output;
}
