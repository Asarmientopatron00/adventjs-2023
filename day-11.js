function getIndexsForPalindrome(word) {
  function checkIfPalindrome(wordToTest, length) {
    for (let x = 0, y = length - 1; x < y; x++, y--) {
      if (wordToTest[x] !== wordToTest[y]) return false;
    }
    return true;
  }
  const splited = word.split("");
  const length = word.length;
  if (checkIfPalindrome(splited, length)) return [];
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      splited[i] = word[j];
      splited[j] = word[i];
      if (checkIfPalindrome(splited, length)) return [i, j];
      splited[i] = word[i];
      splited[j] = word[j];
    }
  }
  return null;
}
