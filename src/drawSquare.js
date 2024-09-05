import setColor from "./setColor";

export default function drawSquare({
  output,
  x,
  y,
  size,
  color,
  ignoreOutside,
}) {
  for (let i = 0; i < size; ++i) {
    for (let j = 0; j < size; ++j) {
      setColor({ output, x: x + i, y: y + j, color, ignoreOutside });
    }
  }
}
