import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";

export default function (input) {
  const output = buildMatrix(25, 25);
  const output = copyMatrix(input);

  return output;
}