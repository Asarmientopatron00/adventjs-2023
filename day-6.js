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
  return Math.abs(
    movementsArray
      .map((data) => {
        if (data === "*") {
          return rightCount >= leftCount ? 1 : -1;
        }
        return data === ">" ? 1 : -1;
      })
      .reduce((curr, data) => curr + data, 0)
  );
}
