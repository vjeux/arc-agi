import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";
import forEachMatrix from "../forEachMatrix";
import getGroupings from "../getGroupings";
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

  let intersections = [];

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

  let maxSize = 0;
  intersections.forEach((intersection) => {
    const top = intersection.horizontal.y - intersection.vertical.y;
    const left = intersection.vertical.x - intersection.horizontal.x;
    const right =
      intersection.horizontal.x +
      intersection.horizontal.width -
      intersection.vertical.x -
      1;
    const bottom =
      intersection.vertical.y +
      intersection.vertical.height -
      intersection.horizontal.y -
      1;
    const size = Math.min(top, left, right, bottom);
    intersection.size = size;
    if (size > maxSize) {
      maxSize = size;
    }
  });

  intersections = intersections.filter((intersection) => intersection.size > 0);

  let totalRed = 0;
  forEachMatrix(input, (color) => {
    if (color === 2) {
      totalRed++;
    }
  });

  outer: for (let size = maxSize; size >= 1; size--) {
    const groupings = getGroupings(
      intersections.filter((intersection) => intersection.size >= size)
    );

    for (let grouping of groupings) {
      let numRed = 0;
      let reds = {};
      grouping.forEach((intersection) => {
        for (
          let i = intersection.horizontal.y - size;
          i <= intersection.horizontal.y + size;
          ++i
        ) {
          if (input[i][intersection.vertical.x] === 2) {
            if (reds[i + ":" + intersection.vertical.x]) {
              break;
            }
            numRed++;
            reds[i + ":" + intersection.vertical.x] = true;
          }
        }
        for (
          let i = intersection.vertical.x - size;
          i <= intersection.vertical.x + size;
          ++i
        ) {
          if (i === intersection.vertical.x) {
            continue;
          }
          if (input[intersection.horizontal.y][i] === 2) {
            if (reds[intersection.horizontal.y + ":" + i]) {
              break;
            }
            numRed++;
            reds[intersection.horizontal.y + ":" + i] = true;
          }
        }
      });

      console.log(size, numRed, totalRed);

      if (numRed === totalRed) {
        intersections
          .filter((intersection) => intersection.size >= size)
          .forEach((intersection) => {
            for (
              let i = intersection.horizontal.y - size;
              i <= intersection.horizontal.y + size;
              ++i
            ) {
              if (input[i][intersection.vertical.x] !== 2) {
                output[i][intersection.vertical.x] = 8;
              }
            }
            for (
              let i = intersection.vertical.x - size;
              i <= intersection.vertical.x + size;
              ++i
            ) {
              if (input[intersection.horizontal.y][i] !== 2) {
                output[intersection.horizontal.y][i] = 8;
              }
            }
          });

        break outer;
      }
    }
  }

  return output;
}
