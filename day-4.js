function decode(message) {
  let text = message.split("");
  let dept = 0;
  let pairs = [];
  text.forEach((char, i) => {
    if (char === "(") {
      pairs.push({ start: i, dept: dept });
      dept++;
    }
    if (char === ")") {
      dept--;
      const index = pairs.findIndex(
        (p) =>
          p.dept === dept &&
          p.start ===
            Math.max(...pairs.filter((p) => !p.final).map((p) => p.start))
      );
      if (index !== -1) {
        const cur = pairs[index];
        cur.final = i;
        const mod = [...pairs];
        mod[index] = cur;
        pairs = mod;
      }
    }
  });

  const sorting = (a, b) => {
    if (b.dept < a.dept) return -1;
    if (b.dept > a.dept) return 1;
    return 0;
  };

  pairs = pairs.sort((a, b) => sorting(a, b));
  let modPairs = [...pairs];
  for (let i = 0; i < pairs.length; i++) {
    const { start, final } = modPairs[i];
    const reverted = text.slice(start + 1, final).reverse();
    text.splice(start, final - start + 1, ...reverted);
    modPairs = modPairs.map((pair) => {
      if (pair.start === start || (pair.start < start && pair.final < final)) {
        return pair;
      }
      return {
        ...pair,
        start: pair.start > start ? pair.start - 2 : pair.start,
        final: pair.final - 2,
      };
    });
  }
  return text.join("");
}
