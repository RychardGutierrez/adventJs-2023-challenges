function countTime(leds) {
  const arrayOfZeros = leds
    .join('')
    .split('1')
    .map((led) => led.length);

  arrayOfZeros[0] += arrayOfZeros.pop();

  return Math.max(...arrayOfZeros) * 7;
}

const leds = [0, 1, 1, 0, 1];
console.log(countTime(leds));



