import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import drawLine from "../drawLine";
import extractShapes from "../extractShapes";

export default function (input) {
  const output = copyMatrix(input);

  const dots = extractShapes(input).filter((s) => s.color !== 0);

  dots.forEach((dot) => {
    const otherDot = dots.find((s) => s !== dot && s.color === dot.color);
    if (otherDot.x === dot.x) {
      return;
    }
    drawLine({
      output,
      x1: dot.x,
      x2: otherDot.x,
      y1: dot.y,
      y2: otherDot.y,
      color: dot.color,
    });
  });

  dots.forEach((dot) => {
    const otherDot = dots.find((s) => s !== dot && s.color === dot.color);
    if (otherDot.y === dot.y) {
      return;
    }
    drawLine({
      output,
      x1: dot.x,
      x2: otherDot.x,
      y1: dot.y,
      y2: otherDot.y,
      color: dot.color,
    });
  });
  return output;
}
