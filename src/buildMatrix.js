export default function buildMatrix(width, height) {
  const result = [];
  for (let i = 0; i < height; ++i) {
    const row = [];
    for (let j = 0; j < width; ++j) {
      row.push(0);
    }
    result.push(row);
  }
  return result;
}
