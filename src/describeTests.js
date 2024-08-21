import { test, expect } from "vitest";
import matrixToString from "./matrixToString";

export default function describeTests(t, solve) {
  [...t.test, ...t.train].forEach((t, i) => {
    test("Test " + i, () => {
      expect(matrixToString(solve(t.input))).toEqual(matrixToString(t.output));
    });
  });
}
