function fixLetter(letter) {
  const removeSpaceLetter = letter.trim().replace(/\s+/g, ' ');

  const removeSpaceSemicolon = removeSpaceLetter.replace(
    /(\s+([,.?!]))/g,
    (m, $1, $2) => $2
  );

  const addPeriotEnd = removeSpaceSemicolon.replace(
    /([A-z])$/,
    (m, $1) => `${$1}.`
  );

  const addQuestion = addPeriotEnd.replace(/([.,?!])(?=\1)/g, '');

  const addSpaceSemicolon = addQuestion
    .replace(/([!?.,])\s+/g, '$1 ')
    .replace(/\s*,\s*/g, ', ');

  const letterUpperCase = addSpaceSemicolon
    .replace(/(^|[.!?]\s+)([a-z])/g, (m, $1, $2) => $1 + $2.toUpperCase())
    .replace(/(^[a-z])/g, (m, $1) => $1.toUpperCase());

  const santaClausUpperCase = letterUpperCase.replace(
    /(santa claus)/gi,
    'Santa Claus'
  );
  return santaClausUpperCase;
}

fixLetter(
  ` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `
);
// Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.

fixLetter(
  "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"
);
// Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?
