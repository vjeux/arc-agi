import { test, expect } from "vitest";
import matrixToString from "./matrixToString";

export default function describeTests(t, solve) {
  [...t.test, ...t.train].forEach((t, i) => {
    test("Test " + i, () => {
      const input = matrixToString(t.input);
      const output = matrixToString(solve(t.input));
      const expectedOutput = matrixToString(t.output);
      if (output !== expectedOutput) {
        console.log("---- Input: ----");
        console.log(input);
        console.log("---- Output: ----");
        console.log(output);
        console.log("---- Expected Output: ----");
        console.log(expectedOutput);
      }
      expect(output).toEqual(expectedOutput);
    });
  });
}
