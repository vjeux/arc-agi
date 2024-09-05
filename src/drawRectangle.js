import setColor from "./setColor";

export default function drawRectangle({
  output,
  x,
  y,
  width,
  height,
  color,
  ignoreOutside,
}) {
  for (let i = 0; i < width; ++i) {
    for (let j = 0; j < height; ++j) {
      setColor({ output, x: x + i, y: y + j, color, ignoreOutside });
    }
  }
}
