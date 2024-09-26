import buildMatrix from "../buildMatrix";
import drawSquare from "../drawSquare";
import extractShapes from "../extractShapes";

export default function (input) {
  const output = buildMatrix(2, 2);

  const shapes = extractShapes(input).filter((s) => s.color !== 0);
  const biggestShape = shapes.find(
    (s) =>
      !shapes.find(
        (ss) => s !== ss && s.width * s.height < ss.width * ss.height
      )
  );

  drawSquare({
    output,
    x: 0,
    y: 0,
    size: 2,
    color: biggestShape.color,
  });
  return output;
}
