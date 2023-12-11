function getIndexsForPalindrome(word) {
  if (checkIfPalindrome(word)) return [];

  for (let i = 0; i < word.length - 1; i++) {
    for (let j = word.length - 1; j > i; j--) {
      const modifiedWord =
        word.substring(0, i) +
        word[j] +
        word.substring(i + 1, j) +
        word[i] +
        word.substring(j + 1);
      if (checkIfPalindrome(modifiedWord)) {
        return [i, j];
      }
    }
  }

  function checkIfPalindrome(wordToTest) {
    const length = wordToTest.length;
    for (let start = 0, end = length - 1; start < end; start++, end--) {
      if (wordToTest[start] !== wordToTest[end]) {
        return false;
      }
    }
    return true;
  }

  return null;
}
