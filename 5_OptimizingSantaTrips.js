function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let maxCombinations = [];
  maxCombinations.push([], [giftsCities[0]]);
  giftsCities.shift();

  giftsCities.forEach((element) => {
    const newListCombination = maxCombinations.map((elementToCombination) => {
      const combination = [...elementToCombination];

      if (combination.length < maxCities) {
        combination.push(element);
      }
      return combination;
    });

    maxCombinations = maxCombinations.concat(newListCombination);
  });

  maxCombinations.shift();

  const maxResult = (maxCombinations, maxGifts) => {
    const result = Math.max(
      ...maxCombinations.map((element) => {
        const sum = element.reduce((total, num) => total + num);
        return sum > maxGifts ? 0 : sum;
      })
    );
    return result;
  };
  return maxResult(maxCombinations, maxGifts);
}

const giftsCities = [12, 3, 11, 5, 7];
const maxGifts = 20;
const maxCities = 3;

// the highest sum of gifts to distribute
// visiting a maximum of 3 cities
// is 20: [12, 3, 5]

// the highest sum would be [12, 7, 11]
// but it exceeds the limit of 20 gifts and he
// would have to leave a city half-way.

getMaxGifts(giftsCities, maxGifts, maxCities); // 20 (12 + 3 + 5)
