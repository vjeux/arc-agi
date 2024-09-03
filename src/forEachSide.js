export default function forEachSide(cb) {
  // top
  cb(0, -1);

  // middle
  cb(-1, 0);
  cb(1, 0);

  // bottom
  cb(0, 1);
}
