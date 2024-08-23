import forEachSideAndDiagonal from "./forEachSideAndDiagonal";
import getWidth from "./getWidth";
import getHeight from "./getHeight";

export default function extractShapes(input) {
  const shapes = [];
  const visited = {};
  let currentShape = [];
  let currentShapeColor;
  let width = getWidth(input);
  let height = getHeight(input);

  for (let i = 0; i < width; ++i) {
    for (let j = 0; j < height; ++j) {
      if (visited[i + ":" + j] === true) {
        continue;
      }
      currentShapeColor = input[j][i];
      currentShape = [];
      currentShape.color = currentShapeColor;
      let todos = [{ x: i, y: j }];
      while (todos.length > 0) {
        const todo = todos.pop();
        if (visited[todo.x + ":" + todo.y] === true) {
          continue;
        }

        const color = input[todo.y][todo.x];
        if (currentShapeColor !== color) {
          continue;
        }
        visited[todo.x + ":" + todo.y] = true;
        currentShape.push(todo);

        forEachSideAndDiagonal((x, y) => {
          if (
            todo.x + x < 0 ||
            todo.x + x >= width ||
            todo.y + y < 0 ||
            todo.y + y >= height
          ) {
            return;
          }
          if (visited[todo.x + x + ":" + (todo.y + y)] === true) {
            return;
          }
          todos.push({ x: todo.x + x, y: todo.y + y });
        });
      }
      shapes.push(currentShape);
    }
  }

  return shapes;
}
