export default function forEachSideAndDiagonal2Wide(cb) {
  for (let i = -2; i <= 2; ++i) {
    for (let j = -2; j <= 2; ++j) {
      if (i === 0 && j === 0) {
        continue;
      }
      cb(i, j);
    }
  }
}
