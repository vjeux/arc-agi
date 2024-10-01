import buildMatrix from "../buildMatrix";
import copyMatrix from "../copyMatrix";

export default function (input) {
  const output = buildMatrix(13, 13);
  const output = copyMatrix(input);

  return output;
}