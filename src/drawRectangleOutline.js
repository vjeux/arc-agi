import drawLine from "./drawLine";

export default function drawRectangleOutline({
  output,
  x,
  y,
  width,
  height,
  color,
  ignoreOutside,
}) {
  drawLine({
    output,
    x1: x,
    x2: x,
    y1: y,
    y2: y + height - 1,
    color,
    ignoreOutside,
  });
  drawLine({
    output,
    x1: x,
    x2: x + width - 1,
    y1: y,
    y2: y,
    color,
    ignoreOutside,
  });
  drawLine({
    output,
    x1: x + width - 1,
    x2: x + width - 1,
    y1: y,
    y2: y + height - 1,
    color,
    ignoreOutside,
  });
  drawLine({
    output,
    x1: x,
    x2: x + width - 1,
    y1: y + height - 1,
    y2: y + height - 1,
    color,
    ignoreOutside,
  });
}
