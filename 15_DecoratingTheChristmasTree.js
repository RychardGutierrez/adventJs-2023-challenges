function decorateTree(base) {
  const dictionary = {
    PP: 'P',
    BB: 'B',
    RR: 'R',
    BP: 'R',
    PB: 'R',
    RP: 'B',
    PR: 'B',
    BR: 'P',
    RB: 'P',
  };

  let baseArray = base.split(' ');
  const decorateArray = [base];
  const baseArrayLength = baseArray.length;
  for (let index = 0; index < baseArrayLength - 1; index++) {
    baseArray = [...baseArray].slice(1).map((decorate, indexDecorate) => {
      const key = baseArray[indexDecorate] + decorate;
      const result = dictionary[key];
      return result;
    });

    decorateArray.unshift(baseArray.join(' '));
  }

  return decorateArray;
}

decorateTree('B P R P');
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

decorateTree('B B'); // ['B', 'B B']
