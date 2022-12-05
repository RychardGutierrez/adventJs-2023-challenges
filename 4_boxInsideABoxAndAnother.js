function fitsInOneBox(boxes) {
  const orderBoxes = boxes.sort((a, b) => a.l - b.l);
  let isFitsInOneBox = true;
  let index = 0;

  for (const { l, w, h } of orderBoxes) {
    if (index + 1 < orderBoxes.length) {
      isFitsInOneBox =
        l < orderBoxes[index + 1].l &&
        w < orderBoxes[index + 1].w &&
        h < orderBoxes[index + 1].h;
    }
    index++;

    if (!isFitsInOneBox) {
      break;
    }
  }

  return isFitsInOneBox;
}

const boxes1 = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
]; // true

const boxes2 = [
  { l: 1, w: 1, h: 10 },
  { l: 3, w: 3, h: 12 },
  { l: 2, w: 2, h: 1 },
]; // false

const boxes3 = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
]; // true

console.log(fitsInOneBox(boxes1));
console.log(fitsInOneBox(boxes2));
console.log(fitsInOneBox(boxes3));
