import copyMatrix from "../copyMatrix";
import forEachMatrix from "../forEachMatrix";
import getWidth from "../getWidth";
import getHeight from "../getHeight";

export default function (input) {
  const result = copyMatrix(input);

  forEachMatrix(result, (value, x, y) => {
    if (value === 0) {
      result[y][x] = 4;
    }
  });

  const width = getWidth(input);
  const height = getHeight(input);

  const visited = {};
  const todos = [];
  for (let i = 0; i < width; ++i) {
    if (result[0][i] === 4) {
      todos.push({ x: i, y: 0 });
    }
    if (result[height - 1][i] === 4) {
      todos.push({ x: i, y: height - 1 });
    }
  }
  for (let i = 0; i < height; ++i) {
    if (result[i][0] === 4) {
      todos.push({ x: 0, y: i });
    }
    if (result[i][width - 1] === 4) {
      todos.push({ x: width - 1, y: i });
    }
  }

  while (todos.length > 0) {
    const element = todos.pop();
    visited[element.x + ":" + element.y] = true;
    if (result[element.y][element.x] === 4) {
      result[element.y][element.x] = 0;
    }

    if (
      element.x + 1 < width &&
      !visited[element.x + 1 + ":" + element.y] &&
      result[element.y][element.x + 1] !== 3
    ) {
      todos.push({ x: element.x + 1, y: element.y });
    }
    if (
      element.x - 1 >= 0 &&
      !visited[element.x - 1 + ":" + element.y] &&
      result[element.y][element.x - 1] !== 3
    ) {
      todos.push({ x: element.x - 1, y: element.y });
    }
    if (
      element.y + 1 < height &&
      !visited[element.x + ":" + (element.y + 1)] &&
      result[element.y + 1][element.x] !== 3
    ) {
      todos.push({ x: element.x, y: element.y + 1 });
    }
    if (
      element.y - 1 >= 0 &&
      !visited[element.x + ":" + (element.y - 1)] &&
      result[element.y - 1][element.x] !== 3
    ) {
      todos.push({ x: element.x, y: element.y - 1 });
    }
  }

  return result;
}
