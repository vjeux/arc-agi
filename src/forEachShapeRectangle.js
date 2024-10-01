export default function forEachShapeRectangle(shape, cb) {
  for (let i = 0; i < shape.width; ++i) {
    for (let j = 0; j < shape.height; ++j) {
      cb(shape.x + i, shape.y + j);
    }
  }
}
