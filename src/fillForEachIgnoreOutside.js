import setColorIgnoreOutside from "./setColorIgnoreOutside";
export default function fillForEachIgnoreOutside(output, x, y, forEach, color) {
  forEach((i, j) => {
    setColorIgnoreOutside(x + i, y + j, color);
  });
}
