function checkPart(part) {
  const reversePart = [...part].reverse();
  if (reversePart.join('') === part) {
    return true;
  }

  const isPalindrome = [...part].some((letter, index) => {
    const newString = part.substring(0, index) + part.substring(index + 1);
    return newString === [...newString].reverse().join('');
  });

  return isPalindrome;
}

checkPart('uwu'); // true
// "uwu" is a palindrome without removing any character

checkPart('miidim'); // true
// "miidim" can be a palindrome after removing the first "i"

checkPart('midu'); // false
// "midu" cannot be a palindrome after removing a character
