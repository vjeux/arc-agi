// 1bfc4729
const t = {"train": [{"input": [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 6, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 7, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], "output": [[6, 6, 6, 6, 6, 6, 6, 6, 6, 6], [6, 0, 0, 0, 0, 0, 0, 0, 0, 6], [6, 6, 6, 6, 6, 6, 6, 6, 6, 6], [6, 0, 0, 0, 0, 0, 0, 0, 0, 6], [6, 0, 0, 0, 0, 0, 0, 0, 0, 6], [7, 0, 0, 0, 0, 0, 0, 0, 0, 7], [7, 0, 0, 0, 0, 0, 0, 0, 0, 7], [7, 7, 7, 7, 7, 7, 7, 7, 7, 7], [7, 0, 0, 0, 0, 0, 0, 0, 0, 7], [7, 7, 7, 7, 7, 7, 7, 7, 7, 7]]}, {"input": [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 4, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], "output": [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 0, 0, 0, 0, 0, 0, 0, 0, 1], [4, 0, 0, 0, 0, 0, 0, 0, 0, 4], [4, 0, 0, 0, 0, 0, 0, 0, 0, 4], [4, 4, 4, 4, 4, 4, 4, 4, 4, 4], [4, 0, 0, 0, 0, 0, 0, 0, 0, 4], [4, 4, 4, 4, 4, 4, 4, 4, 4, 4]]}], "test": [{"input": [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 2, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 8, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], "output": [[2, 2, 2, 2, 2, 2, 2, 2, 2, 2], [2, 0, 0, 0, 0, 0, 0, 0, 0, 2], [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], [2, 0, 0, 0, 0, 0, 0, 0, 0, 2], [2, 0, 0, 0, 0, 0, 0, 0, 0, 2], [8, 0, 0, 0, 0, 0, 0, 0, 0, 8], [8, 0, 0, 0, 0, 0, 0, 0, 0, 8], [8, 8, 8, 8, 8, 8, 8, 8, 8, 8], [8, 0, 0, 0, 0, 0, 0, 0, 0, 8], [8, 8, 8, 8, 8, 8, 8, 8, 8, 8]]}]};

import solve from "./training-28";
import describeTests from "../describeTests";
describeTests(t, solve);