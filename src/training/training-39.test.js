// 2013d3e2
const t = {"train": [{"input": [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 7, 7, 0, 0, 0, 0], [0, 0, 0, 6, 8, 8, 6, 0, 0, 0], [0, 0, 7, 8, 4, 4, 8, 7, 0, 0], [0, 0, 7, 8, 4, 4, 8, 7, 0, 0], [0, 0, 0, 6, 8, 8, 6, 0, 0, 0], [0, 0, 0, 0, 7, 7, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], "output": [[0, 0, 7], [0, 6, 8], [7, 8, 4]]}, {"input": [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 3, 6, 5, 3, 0, 0, 0, 0], [0, 0, 5, 2, 2, 6, 0, 0, 0, 0], [0, 0, 6, 2, 2, 5, 0, 0, 0, 0], [0, 0, 3, 5, 6, 3, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], "output": [[1, 0, 0], [0, 3, 6], [0, 5, 2]]}], "test": [{"input": [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 8, 0, 0, 0, 0], [0, 0, 0, 4, 4, 8, 4, 0, 0, 0], [0, 0, 8, 8, 3, 3, 4, 0, 0, 0], [0, 0, 0, 4, 3, 3, 8, 8, 0, 0], [0, 0, 0, 4, 8, 4, 4, 0, 0, 0], [0, 0, 0, 0, 8, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], "output": [[0, 0, 0], [0, 4, 4], [8, 8, 3]]}]};

import solve from "./training-39";
import describeTests from "../describeTests";
describeTests(t, solve);