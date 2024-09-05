import setColorIgnoreOutside from "./setColorIgnoreOutside";

export default function drawRectangleIgnoreOutside({
  output,
  x,
  y,
  width,
  height,
  color,
}) {
  for (let i = 0; i < width; ++i) {
    for (let j = 0; j < height; ++j) {
      setColorIgnoreOutside(output, x + i, y + j, color);
    }
  }
}
