import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import forEachSide from "../forEachSide";
import extractShapes from "../extractShapes";
import isPixelOutsideMatrix from "../isPixelOutsideMatrix";

export default function (input) {
  const shapes = extractShapes(input).filter((s) => s.color === 2);

  let todos = [...shapes[0]];
  let foundPath = false;

  let isStart = {};
  shapes[0].forEach((p) => {
    isStart[p.x + ":" + p.y] = true;
  });

  let visited = {};
  while (foundPath === false && todos.length > 0) {
    const todo = todos.pop();
    if (visited[todo.x + ":" + todo.y]) {
      continue;
    }
    visited[todo.x + ":" + todo.y] = true;
    forEachSide((x, y) => {
      if (isPixelOutsideMatrix(input, todo.x + x, todo.y + y)) {
        return;
      }
      const color = input[todo.y + y][todo.x + x];
      if (!isStart[todo.x + x + ":" + (todo.y + y)] && color === 2) {
        foundPath = true;
      } else if (color === 8) {
        todos.push({ x: todo.x + x, y: todo.y + y });
      }
    });
  }

  const output = buildMatrix(1, 1);
  if (foundPath) {
    output[0][0] = 8;
  }

  return output;
}
