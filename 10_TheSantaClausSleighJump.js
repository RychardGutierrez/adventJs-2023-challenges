function checkJump(heights) {
  let maxPosition = heights.indexOf(Math.max(...heights));
  const upSlice = heights.splice(0, maxPosition);

  const up = upSlice
    .slice(1)
    .every((height, index) => height >= upSlice[index]);
  const dowload = heights
    .slice(1)
    .every((height, index) => height <= heights[index]);
  return up && dowload && Boolean(upSlice.length) && heights.length > 1;
}

const heights = [1, 3, 8, 5, 2];

console.log(checkJump(heights));
