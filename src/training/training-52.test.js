// 25d8a9c8
const t = {"train": [{"input": [[4, 4, 4], [2, 3, 2], [2, 3, 3]], "output": [[5, 5, 5], [0, 0, 0], [0, 0, 0]]}, {"input": [[7, 3, 3], [6, 6, 6], [3, 7, 7]], "output": [[0, 0, 0], [5, 5, 5], [0, 0, 0]]}, {"input": [[2, 9, 2], [4, 4, 4], [9, 9, 9]], "output": [[0, 0, 0], [5, 5, 5], [5, 5, 5]]}, {"input": [[2, 2, 4], [2, 2, 4], [1, 1, 1]], "output": [[0, 0, 0], [0, 0, 0], [5, 5, 5]]}], "test": [{"input": [[4, 4, 4], [3, 2, 3], [8, 8, 8]], "output": [[5, 5, 5], [0, 0, 0], [5, 5, 5]]}]};

import solve from "./training-52";
import describeTests from "../describeTests";
describeTests(t, solve);
