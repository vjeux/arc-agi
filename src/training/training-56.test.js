// 27a28665
const t = {"train": [{"input": [[5, 5, 0], [5, 0, 5], [0, 5, 0]], "output": [[1]]}, {"input": [[8, 0, 8], [0, 8, 0], [8, 0, 8]], "output": [[2]]}, {"input": [[5, 0, 5], [0, 5, 0], [5, 0, 5]], "output": [[2]]}, {"input": [[0, 1, 1], [0, 1, 1], [1, 0, 0]], "output": [[3]]}, {"input": [[0, 8, 8], [0, 8, 8], [8, 0, 0]], "output": [[3]]}, {"input": [[4, 4, 0], [4, 0, 4], [0, 4, 0]], "output": [[1]]}, {"input": [[0, 5, 0], [5, 5, 5], [0, 5, 0]], "output": [[6]]}], "test": [{"input": [[0, 8, 0], [8, 8, 8], [0, 8, 0]], "output": [[6]]}, {"input": [[7, 7, 0], [7, 0, 7], [0, 7, 0]], "output": [[1]]}, {"input": [[2, 0, 2], [0, 2, 0], [2, 0, 2]], "output": [[2]]}]};

import solve from "./training-56";
import describeTests from "../describeTests";
describeTests(t, solve);
