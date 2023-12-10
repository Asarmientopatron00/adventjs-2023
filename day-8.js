function organizeGifts(gifts) {
  const numbersArray = gifts.match(/\d+/g).map((n) => Number(n));
  const alphabeticCharsArray = gifts.match(/[a-zA-Z]+/g);
  let result = "";
  for (let i = 0; i < numbersArray.length; i++) {
    decodeNumber(numbersArray[i], alphabeticCharsArray[i]);
  }
  function decodeNumber(num, char) {
    let numCopy = num;
    const res50 = Math.floor(num / 50);
    numCopy = numCopy - 50 * res50;
    result += `[${char}]`.repeat(res50);
    const res10 = Math.floor(numCopy / 10);
    numCopy = numCopy - 10 * res10;
    result += `{${char}}`.repeat(res10);
    if (numCopy > 0) {
      result += `(${char.repeat(numCopy)})`;
    }
  }
  return result;
}
