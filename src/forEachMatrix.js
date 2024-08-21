export default function forEachMatrix(input, cb) {
  input.forEach((row, i) => {
    row.forEach((col, j) => {
      cb(row[j], i, j);
    });
  });
}
