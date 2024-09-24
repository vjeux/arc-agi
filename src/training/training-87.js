import rotateMatrix from "../rotateMatrix";

export default function (input) {
  return rotateMatrix(90, rotateMatrix(90, input));
}
