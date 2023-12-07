function cyberReindeer(road, time) {
  const sled = "S";
  let arrayRoad = road.split("");
  let barriersIndex = [];
  let sPos = 0;
  let result = [road];
  arrayRoad.forEach((p, i) => {
    if (p === "|") {
      barriersIndex.push(i);
    }
  });
  for (let i = 0; i < time - 1; i++) {
    if (i === 4) {
      arrayRoad = arrayRoad.map((p) => {
        if (p === "|") {
          return "*";
        }
        return p;
      });
    }
    if (arrayRoad[sPos + 1] !== "|") {
      arrayRoad.splice(sPos, 1, barriersIndex.includes(sPos) ? "*" : ".");
      sPos++;
      arrayRoad.splice(sPos, 1, sled);
    }
    result.push(arrayRoad.join(""));
  }
  return result;
}
