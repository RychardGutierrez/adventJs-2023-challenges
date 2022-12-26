function printTable(gifts) {
  const maxNameLength = Math.max(...gifts.map(({ name }) => name.length), 4);
  const maxQuantityLength = Math.max(
    ...gifts.map(({ quantity }) => String(quantity).length),
    8
  );
  const printRow = (name, quantity, padChar = ' ') =>
    `| ${name.padEnd(maxNameLength, padChar)} | ${quantity.padEnd(
      maxQuantityLength,
      padChar
    )} |`;

  const top = '+'.repeat(maxNameLength + maxQuantityLength + 7);
  const bottom = '*'.repeat(maxNameLength + maxQuantityLength + 7);
  const header = printRow('Gift', 'Quantity');
  const subHeader = printRow('', '', '-');

  const giftRows = gifts.map(({ name, quantity }) =>
    printRow(name, String(quantity))
  );
  const table = [top, header, subHeader, ...giftRows, bottom].join('\n');

  return table;
}

const printA = printTable([
  { name: 'Game', quantity: 2 },
  { name: 'Bike', quantity: 1 },
  { name: 'Book', quantity: 3 },
]);

console.log(printA);
const printB = printTable([
  { name: 'PlayStation 5', quantity: 9234782374892 },
  { name: 'Book Learn Web Dev', quantity: 23531 },
]);
console.log(printB);
