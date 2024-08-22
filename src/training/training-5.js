import copyMatrix from "../copyMatrix";
import copySubMatrix from "../copySubMatrix";

// This returns the first color it finds
function getSubMatrixColor({ input, x, y, width, height }) {
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if (
        y + j < 0 ||
        y + j >= input.length ||
        x + i < 0 ||
        x + i >= input.length
      ) {
        continue;
      }
      const value = input[y + j][x + i];
      if (value !== 0) {
        return value;
      }
    }
  }
  return 0;
}

function forEachSideAndDiagonal(cb) {
  // top
  cb(-1, -1);
  cb(0, -1);
  cb(1, -1);

  // middle
  cb(-1, 0);
  cb(1, 0);

  // bottom
  cb(-1, 1);
  cb(0, 1);
  cb(1, 1);
}

export default function (input) {
  const result = copyMatrix(input);

  let maxCount = -1;
  let maxColor = 0;
  let maxPosition = null;

  for (let i = 0; i < 21; ++i) {
    for (let j = 0; j < 21; ++j) {
      let count = 0;
      let color = 0;
      let position = { x: i, y: j };
      for (let x = 0; x < 3; ++x) {
        for (let y = 0; y < 3; ++y) {
          if (j + y >= 21 || i + x >= 21) {
            continue;
          }
          const value = input[j + y][i + x];
          if (value !== 0) {
            if (color === 0) {
              color = value;
            }
            if (value === color) {
              count++;
            }
          }
        }
      }

      if (count > maxCount) {
        maxCount = count;
        maxColor = color;
        maxPosition = position;
      }
    }
  }

  forEachSideAndDiagonal((dx, dy) => {
    let otherColor = getSubMatrixColor({
      input,
      x: maxPosition.x + dx * 4,
      y: maxPosition.y + dy * 4,
      width: 3,
      height: 3,
    });

    if (otherColor !== 0) {
      for (let i = 1; i < 10; ++i) {
        copySubMatrix({
          input,
          x1: maxPosition.x,
          y1: maxPosition.y,
          output: result,
          x2: maxPosition.x + dx * i * 4,
          y2: maxPosition.y + dy * i * 4,
          width: 3,
          height: 3,
          color: otherColor,
        });
      }
    }
  });

  return result;
}
