import buildMatrix from "../buildMatrix";

export default function (input) {
  const output = buildMatrix(1, 1);

  if (
    input[0][0] === input[0][2] &&
    input[1][0] === input[1][2] &&
    input[2][0] === input[2][2]
  ) {
    output[0][0] = 1;
  } else {
    output[0][0] = 7;
  }

  return output;
}
