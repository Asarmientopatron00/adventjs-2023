function getIndexsForPalindrome(word) {
  function checkIfPalindrome(wordToTest, length) {
    for (let x = 0; x < Math.floor(length / 2); x++) {
      if (wordToTest[x] !== wordToTest[length - 1 - x]) return false;
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
