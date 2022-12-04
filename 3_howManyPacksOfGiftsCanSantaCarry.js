function distributeGifts(packOfGifts, reindeers) {
  let amountpackOfGifts = 0;
  let amountReindeers = 0;
  packOfGifts.forEach((packOfGift) => {
    amountpackOfGifts += packOfGift.length;
  });

  reindeers.forEach((reindeer) => {
    amountReindeers += reindeer.length * 2;
  });
  const result = amountReindeers / amountpackOfGifts;
  return Number(Math.trunc(result));
}

const packOfGifts = ['book', 'doll', 'ball'];
const reindeers = ['dasher', 'dancer'];

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
console.log(distributeGifts(['a', 'b', 'c'], ['d', 'e'])); // 2
console.log(
  distributeGifts(
    ['game', 'videoconsole', 'computer'],
    [
      'midudev',
      'pheralb',
      'codingwithdani',
      'carlosble',
      'blasco',
      'facundocapua',
      'madeval',
      'memxd',
    ]
  )
);
