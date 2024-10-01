// 44f52bb0
const t = {"train": [{"input": [[2, 0, 2], [0, 2, 0], [2, 0, 2]], "output": [[1]]}, {"input": [[2, 0, 0], [2, 0, 0], [0, 2, 0]], "output": [[7]]}, {"input": [[2, 0, 2], [2, 0, 2], [2, 0, 2]], "output": [[1]]}, {"input": [[0, 0, 0], [2, 0, 2], [0, 0, 0]], "output": [[1]]}, {"input": [[2, 2, 0], [0, 2, 2], [0, 0, 0]], "output": [[7]]}, {"input": [[2, 2, 0], [0, 2, 0], [0, 0, 0]], "output": [[7]]}], "test": [{"input": [[2, 0, 2], [2, 2, 2], [2, 0, 2]], "output": [[1]]}, {"input": [[0, 0, 0], [2, 0, 0], [2, 0, 0]], "output": [[7]]}]};

import solve from "./training-103";
import describeTests from "../describeTests";
describeTests(t, solve);
