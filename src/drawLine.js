export default function drawLine({ output, x1, y1, x2, y2, color }) {
  const totalX = x2 - x1;
  const totalY = y2 - y1;
  const total = Math.max(totalX, totalY) + 1;

  const stepX = Math.sign(totalX);
  const stepY = Math.sign(totalY);
  for (let i = 0; i < total; i++) {
    output[y1 + stepY * i][x1 + stepX * i] = color;
  }
}
