import setColor from "./setColor";
export default function drawForEach({
  output,
  x,
  y,
  forEach,
  color,
  ignoreOutside,
}) {
  forEach((i, j) => {
    setColor({ output, x: x + i, y: y + j, color, ignoreOutside });
  });
}
