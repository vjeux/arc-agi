// 3c9b0459
const t = {"test": [{"input": [[6, 4, 4], [6, 6, 4], [4, 6, 7]], "output": [[7, 6, 4], [4, 6, 6], [4, 4, 6]]}], "train": [{"input": [[2, 2, 1], [2, 1, 2], [2, 8, 1]], "output": [[1, 8, 2], [2, 1, 2], [1, 2, 2]]}, {"input": [[9, 2, 4], [2, 4, 4], [2, 9, 2]], "output": [[2, 9, 2], [4, 4, 2], [4, 2, 9]]}, {"input": [[8, 8, 8], [5, 5, 8], [8, 5, 5]], "output": [[5, 5, 8], [8, 5, 5], [8, 8, 8]]}, {"input": [[3, 2, 9], [9, 9, 9], [2, 3, 3]], "output": [[3, 3, 2], [9, 9, 9], [9, 2, 3]]}]};

import solve from "./training-87";
import describeTests from "../describeTests";
describeTests(t, solve);
