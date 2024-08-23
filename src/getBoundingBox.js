export default function getBoundingBox(shape) {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  for (let i = 0; i < shape.length; ++i) {
    const cell = shape[i];
    minX = Math.min(cell.x, minX);
    minY = Math.min(cell.y, minY);
    maxX = Math.max(cell.x, maxX);
    maxY = Math.max(cell.y, maxY);
  }
  return {
    x: minX,
    y: minY,
    width: maxX - minX + 1,
    height: maxY - minY + 1,
  };
}
