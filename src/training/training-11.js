import copyMatrix from "../copyMatrix";

function findSlot(input) {
  for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
      let numColors = 0;
      for (let x = 0; x < 3; ++x) {
        for (let y = 0; y < 3; ++y) {
          const color = input[j * 4 + y][i * 4 + x];
          if (color !== 0) {
            numColors++;
          }
        }
      }
      if (numColors === 4) {
        return [i, j];
      }
    }
  }
}

export default function (input) {
  const result = copyMatrix(input);
  const [slotX, slotY] = findSlot(input);

  for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
      const color = input[slotY * 4 + j][slotX * 4 + i];
      for (let x = 0; x < 3; ++x) {
        for (let y = 0; y < 3; ++y) {
          result[j * 4 + y][i * 4 + x] = color;
        }
      }
    }
  }

  return result;
}
