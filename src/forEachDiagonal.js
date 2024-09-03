export default function forEachDiagonal(cb) {
  // top
  cb(-1, -1);
  cb(1, -1);

  // bottom
  cb(-1, 1);
  cb(1, 1);
}
