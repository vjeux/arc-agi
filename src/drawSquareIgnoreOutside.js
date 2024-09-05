import setColorIgnoreOutside from "./setColorIgnoreOutside";

export default function drawSquareIgnoreOutside({ output, x, y, size, color }) {
  for (let i = 0; i < size; ++i) {
    for (let j = 0; j < size; ++j) {
      setColorIgnoreOutside(output, x + i, y + j, color);
    }
  }
}
