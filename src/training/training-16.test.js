// 0d3d703e
const t = {"train": [{"input": [[3, 1, 2], [3, 1, 2], [3, 1, 2]], "output": [[4, 5, 6], [4, 5, 6], [4, 5, 6]]}, {"input": [[2, 3, 8], [2, 3, 8], [2, 3, 8]], "output": [[6, 4, 9], [6, 4, 9], [6, 4, 9]]}, {"input": [[5, 8, 6], [5, 8, 6], [5, 8, 6]], "output": [[1, 9, 2], [1, 9, 2], [1, 9, 2]]}, {"input": [[9, 4, 2], [9, 4, 2], [9, 4, 2]], "output": [[8, 3, 6], [8, 3, 6], [8, 3, 6]]}], "test": [{"input": [[8, 1, 3], [8, 1, 3], [8, 1, 3]], "output": [[9, 5, 4], [9, 5, 4], [9, 5, 4]]}]};

import solve from "./training-16";
import describeTests from "../describeTests";
describeTests(t, solve);
