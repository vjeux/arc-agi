export default function copySubMatrix({
  input,
  x0,
  y0,
  x1,
  y1,
  output,
  x2,
  y2,
  width,
  height,
  color,
  overrideBlack,
  overrideColor,
}) {
  if (x0 !== undefined && x1 !== undefined) {
    x2 -= x0 - x1;
    y2 -= y0 - y1;
  }

  for (let i = 0; i < width; ++i) {
    for (let j = 0; j < height; ++j) {
      if (
        y2 + j < 0 ||
        y2 + j >= output.length ||
        y1 + j < 0 ||
        y1 + j >= input.length ||
        x2 + i < 0 ||
        x2 + i >= output[0].length ||
        x1 + i < 0 ||
        x1 + i >= input[0].length
      ) {
        continue;
      }
      let value = input[y1 + j][x1 + i];
      if (output[y2 + j][x2 + i] !== 0 && overrideColor === false) {
        continue;
      }
      if (color !== undefined && value !== 0) {
        value = color;
      }
      if (value === 0 && overrideBlack === false) {
        continue;
      }
      output[y2 + j][x2 + i] = value;
    }
  }
}
