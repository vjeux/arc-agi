export default function isPixelInShape(pixel, shape) {
  return !!shape.find((p) => p.x === pixel.x && p.y === pixel.y);
}
