import setColor from "./setColor";
export default function drawLine({
  output,
  x1,
  y1,
  x2,
  y2,
  color,
  ignoreOutside,
}) {
  const totalX = x2 - x1;
  const totalY = y2 - y1;
  const total = Math.max(totalX, totalY) + 1;
  if (total < 0) {
    drawLine({
      output,
      x1: x2,
      y1: y2,
      x2: x1,
      y2: y1,
      color,
      ignoreOutside,
    });
    return;
  }

  const stepX = Math.sign(totalX);
  const stepY = Math.sign(totalY);
  for (let i = 0; i < total; i++) {
    setColor({
      output,
      x: x1 + stepX * i,
      y: y1 + stepY * i,
      color,
      ignoreOutside,
    });
  }
}
