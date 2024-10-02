import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import getHeight from "../getHeight";
import getWidth from "../getWidth";

export default function (input) {
  const width = getWidth(input);
  const height = getHeight(input);
  const output = copyMatrix(input);

  const horizontals = [];
  for (let j = 0; j < height; ++j) {
    let isRun = false;
    let startX = -1;
    let hasRed = false;
    for (let i = 0; i < width; ++i) {
      if (input[j][i] === 5 || input[j][i] === 2) {
        if (!isRun) {
          startX = i;
          hasRed = false;
          isRun = true;
        }
        if (input[j][i] === 2) {
          hasRed = true;
        }
      } else {
        if (isRun && hasRed) {
          horizontals.push({ x: startX, y: j, width: i - startX, height: 1 });
        }
        isRun = false;
      }
    }
    if (isRun && hasRed) {
      horizontals.push({ x: startX, y: j, width: width - startX, height: 1 });
    }
  }

  const verticals = [];
  for (let i = 0; i < width; ++i) {
    let isRun = false;
    let startY = -1;
    let hasRed = false;
    for (let j = 0; j < height; ++j) {
      if (input[j][i] === 5 || input[j][i] === 2) {
        if (!isRun) {
          startY = j;
          hasRed = false;
          isRun = true;
        }
        if (input[j][i] === 2) {
          hasRed = true;
        }
      } else {
        if (isRun && hasRed) {
          verticals.push({ y: startY, x: i, width: 1, height: j - startY });
        }
        isRun = false;
      }
    }
    if (isRun && hasRed) {
      verticals.push({ y: startY, x: i, width: 1, height: j - startY });
    }
  }

  const intersections = [];

  horizontals.forEach((horizontal) => {
    verticals.forEach((vertical) => {
      if (
        vertical.y < horizontal.y &&
        vertical.y + vertical.height > horizontal.y &&
        horizontal.x < vertical.x &&
        horizontal.x + horizontal.width > vertical.x
      ) {
        intersections.push({ horizontal, vertical });
      }
    });
  });

  console.log(intersections);

  return output;
}
