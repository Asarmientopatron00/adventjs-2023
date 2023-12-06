function maxDistance(movements) {
  let rightCount = 0;
  let leftCount = 0;
  const movementsArray = movements.split("");
  movementsArray.forEach((char) => {
    if (char === "<") {
      leftCount++;
    }
    if (char === ">") {
      rightCount++;
    }
  });
  const maxDistance = movementsArray.reduce((curr, data) => {
    if (data === "*") {
      if (rightCount >= leftCount) {
        curr = curr + 1;
      } else {
        curr = curr - 1;
      }
    }
    if (data === ">") {
      curr = curr + 1;
    }
    if (data === "<") {
      curr = curr + -1;
    }
    return curr;
  }, 0);
  return Math.abs(maxDistance);
}
