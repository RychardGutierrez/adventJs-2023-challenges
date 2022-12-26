function getGiftsToRefill(a1, a2, a3) {
  const giftsToRefill = [];
  a1.forEach((element) => {
    if (
      !a2.includes(element) &&
      !a3.includes(element) &&
      !giftsToRefill.includes(element)
    ) {
      giftsToRefill.push(element);
    }
  });

  a2.forEach((element) => {
    if (
      !a1.includes(element) &&
      !a3.includes(element) &&
      !giftsToRefill.includes(element)
    ) {
      giftsToRefill.push(element);
    }
  });

  a3.forEach((element) => {
    if (
      !a1.includes(element) &&
      !a2.includes(element) &&
      !giftsToRefill.includes(element)
    ) {
      giftsToRefill.push(element);
    }
  });
  return giftsToRefill;
}

const a1 = ['bike', 'car', 'bike', 'bike'];
const a2 = ['car', 'bike', 'doll', 'car'];
const a3 = ['bike', 'pc', 'pc'];

/* The store a1 has "bike" and "car".
The store a2 has "car", "bike" and "doll".
The store a3 has "bike" and "pc".

The gift "doll" and "pc" are only in the stores a2 and a3 respectively.
*/

const gifts = getGiftsToRefill(a1, a2, a3); // ['doll', 'pc']
