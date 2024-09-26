import getColor from "./getColor";

export default function findNextBlockInLine(input, x, y, dx, dy, targetColor) {
  if (!dx && !dy) {
    throw new Exception("findNextBlockInLine must have dx and dy !== 0");
  }
  while (true) {
    x += dx;
    y += dy;
    const color = getColor(input, x, y);
    if (color === null) {
      return null;
    }
    if (targetColor !== undefined && color !== targetColor) {
      continue;
    }
    if (color !== 0) {
      return { x, y };
    }
  }
}
