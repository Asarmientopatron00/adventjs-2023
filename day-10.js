function createChristmasTree(ornaments, height) {
  const splited = ornaments.split("");
  let result = "";
  let x = 0;
  for (let i = 1; i <= height; i++) {
    result += " ".repeat(height - i);
    for (let j = 0; j < i; j++) {
      result += splited[x] + (j === i - 1 ? "" : " ");
      x++;
      if (x >= splited.length) {
        x = 0;
      }
    }
    result += "\n";
  }
  result += " ".repeat(height - 1) + "|" + "\n";
  return result;
}
