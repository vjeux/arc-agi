import setColorIgnoreOutside from "./setColorIgnoreOutside";
export default function fillForEachIgnoreOutside(output, x, y, forEach, color) {
  forEach((i, j) => {
    setColorIgnoreOutside(output, x + i, y + j, color);
  });
}
