export default function forEachMatrix(input, cb) {
  input.forEach((row, y) => {
    row.forEach((color, x) => {
      cb(color, x, y);
    });
  });
}
