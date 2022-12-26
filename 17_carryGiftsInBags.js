function carryGifts(gifts, maxWeight) {
  let carry = [];

  gifts.forEach((gift) => {
    if (gift.length > maxWeight) {
      return;
    }

    const isFitsOnCurrentBag =
      carry.at(-1) &&
      carry.at(-1).replaceAll(' ', '').length + gift.length <= maxWeight;

    if (isFitsOnCurrentBag) {
      return (carry[carry.length - 1] += ` ${gift}`);
    }
    carry.push(gift);
  });

  return carry;
}

console.log(carryGifts(['game', 'bike', 'book', 'toy'], 10));
// ['game bike', 'book toy']
// in each bag you can carry 10kg
// the first bag carries 'game' and 'bike' which weigh 4kg and 4kg
// the second bag carries 'book' and ' toy' which weigh 4kg and 3kg

console.log(carryGifts(['game', 'bike', 'book', 'toy'], 7));
// ['game', 'bike', 'book toy']
// in each bag you can carry 7kg
// the first bag can only carry 'game' which weighs 4kg
// the second bag can only carry 'bike' which weighs 4kg

console.log(carryGifts(['game', 'bike', 'book', 'toy'], 4));
// ['game', 'bike', 'book', 'toy']
// in each bag you can carry 4kg
// each bag can only carry one gift

console.log(carryGifts(['toy', 'gamme', 'toy', 'bike'], 6));
// ['toy', 'gamme', 'toy', 'bike']
// in each bag you can carry 6kg
// each bag can only carry one gift
// note that you can not carry 'toy toy' in a bag
// because it is not next to each other
