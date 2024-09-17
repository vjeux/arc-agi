import copyMatrix from "../copyMatrix";
import drawSquare from "../drawSquare";

export default function (input) {
  const output = copyMatrix(input);

  let maxCount = 0;
  let maxColor = 0;

  for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
      let currentCount = 0;
      for (let x = 0; x < 3; ++x) {
        for (let y = 0; y < 3; ++y) {
          const color = input[j * 4 + y][i * 4 + x];
          if (color !== 0) {
            currentCount++;
            maxColor = color;
          }
        }
      }
      if (currentCount > maxCount) {
        maxCount = currentCount;
      }
    }
  }

  for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
      let currentCount = 0;
      for (let x = 0; x < 3; ++x) {
        for (let y = 0; y < 3; ++y) {
          const color = input[j * 4 + y][i * 4 + x];
          if (color !== 0) {
            currentCount++;
            maxColor = color;
          }
        }
      }

      drawSquare({
        output,
        x: i * 4,
        y: j * 4,
        size: 3,
        color: currentCount === maxCount ? maxColor : 0,
      });
    }
  }

  return output;
}
