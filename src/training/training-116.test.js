// 4c4377d9
const t = {"test": [{"input": [[4, 4, 9, 9], [4, 4, 4, 4], [4, 4, 9, 9]], "output": [[4, 4, 9, 9], [4, 4, 4, 4], [4, 4, 9, 9], [4, 4, 9, 9], [4, 4, 4, 4], [4, 4, 9, 9]]}], "train": [{"input": [[9, 9, 5, 9], [5, 5, 9, 9], [9, 5, 9, 9]], "output": [[9, 5, 9, 9], [5, 5, 9, 9], [9, 9, 5, 9], [9, 9, 5, 9], [5, 5, 9, 9], [9, 5, 9, 9]]}, {"input": [[4, 1, 1, 4], [1, 1, 1, 1], [4, 4, 4, 1]], "output": [[4, 4, 4, 1], [1, 1, 1, 1], [4, 1, 1, 4], [4, 1, 1, 4], [1, 1, 1, 1], [4, 4, 4, 1]]}, {"input": [[9, 4, 9, 4], [9, 9, 4, 4], [4, 4, 4, 4]], "output": [[4, 4, 4, 4], [9, 9, 4, 4], [9, 4, 9, 4], [9, 4, 9, 4], [9, 9, 4, 4], [4, 4, 4, 4]]}, {"input": [[3, 3, 5, 5], [3, 5, 5, 3], [5, 5, 3, 3]], "output": [[5, 5, 3, 3], [3, 5, 5, 3], [3, 3, 5, 5], [3, 3, 5, 5], [3, 5, 5, 3], [5, 5, 3, 3]]}]};

import solve from "./training-116";
import describeTests from "../describeTests";
describeTests(t, solve);