function drawGift(size, symbol) {
  if (size === 1) {
    return "#\n";
  }
  const border = "#";
  const borderLine = border.repeat(size);
  let draw = " ".repeat(size - 1) + borderLine + "\n";
  for (let i = 1; i < size * 2 - 2; i++) {
    if (i < size - 1) {
      draw +=
        " ".repeat(size - i - 1) +
        "#" +
        symbol.repeat(size - 2) +
        "#" +
        symbol.repeat(i - 1) +
        "#" +
        "\n";
      continue;
    }
    if (i === size - 1) {
      draw += borderLine + symbol.repeat(i - 1) + "#" + "\n";
      continue;
    }
    if (i > size - 1) {
      draw +=
        "#" +
        symbol.repeat(size - 2) +
        "#" +
        symbol.repeat(size * 2 - 3 - i) +
        "#" +
        "\n";
      continue;
    }
  }
  draw += borderLine + "\n";
  return draw;
}
