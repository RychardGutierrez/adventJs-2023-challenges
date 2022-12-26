function dryNumber(dry, numbers) {
  const result = new Array(numbers)
    .fill()
    .map((value, index) => index + 1)
    .filter((value) => String(value).includes(String(dry)));
  
  return result;
}

console.log(dryNumber(1, 15)); // [1, 10, 11, 12, 13, 14, 15]
