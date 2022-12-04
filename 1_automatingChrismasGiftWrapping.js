function wrapping(gifts) {
  const wrapperGifts = gifts.map((gift) => {
    const wrapperAsterisk = getAsterisk(gift);
    return `${wrapperAsterisk}\n*${gift}*\n${wrapperAsterisk}`;
  });

  return wrapperGifts;
}

function getAsterisk(gift) {
  return Array.from({ length: (n = gift.length + 2) }, () => '*').join('');
}

const gifts = ['midu'];
const wrapped = wrapping(gifts);

console.log(wrapped);
