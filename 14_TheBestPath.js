function getOptimalPath(path) {
  const getOptimalRowColumn = (path, row, column) => {
    if (row === path.length - 1) {
      return path[row][column];
    }
    const left = getOptimalRowColumn(path, row + 1, column);
    const right = getOptimalRowColumn(path, row + 1, column + 1);
    return path[row][column] + Math.min(left, right);
  };

  const result = getOptimalRowColumn(path, 0, 0);
  return result;
}

getOptimalPath([[0], [2, 3]]); // 2

getOptimalPath([[0], [3, 4], [9, 8, 1]]); // 5

getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]); // 8
