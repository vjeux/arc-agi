export default function forEachSideAndDiagonal(cb) {
  // top
  cb(-1, -1);
  cb(0, -1);
  cb(1, -1);

  // middle
  cb(-1, 0);
  cb(1, 0);

  // bottom
  cb(-1, 1);
  cb(0, 1);
  cb(1, 1);
}
