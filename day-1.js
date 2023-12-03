function findFirstRepeated(gifts) {
  const newGifts = [];
  for (let i = 0; i < gifts.length; i++) {
    const currentGift = gifts[i];
    if (newGifts.includes(currentGift)) {
      return currentGift;
    }
    newGifts.push(currentGift);
  }
  return -1;
}
