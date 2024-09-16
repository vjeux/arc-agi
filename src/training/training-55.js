import copyMatrix from "../copyMatrix";
import drawRectangle from "../drawRectangle";
import extractShapes from "../extractShapes";

export default function (input) {
  const output = copyMatrix(input);

  const blackShapes = extractShapes(input).filter((s) => s.color === 0);

  drawRectangle({
    output,
    ...blackShapes[1],
    color: 4,
  });
  drawRectangle({
    output,
    ...blackShapes[3],
    color: 2,
  });
  drawRectangle({
    output,
    ...blackShapes[4],
    color: 6,
  });
  drawRectangle({
    output,
    ...blackShapes[5],
    color: 1,
  });
  drawRectangle({
    output,
    ...blackShapes[7],
    color: 3,
  });

  return output;
}
