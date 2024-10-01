import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";

export default function (input) {
  const output = buildMatrix(1, 1);
  const output = copyMatrix(input);

  return output;
}