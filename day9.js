function adjustLights(lights) {
  const green = "🟢";
  const red = "🔴";
  function ligthsGenerator(size) {
    let greenA = [];
    let redA = [];
    for (let i = 0; i < size; i++) {
      if (i % 2 === 0) {
        greenA.push(green);
        redA.push(red);
        continue;
      }
      greenA.push(red);
      redA.push(green);
    }
    return { greenA, redA };
  }
  const { greenA, redA } = ligthsGenerator(lights.length);
  let gDif = 0;
  let rDif = 0;
  for (let i = 0; i < lights.length; i++) {
    if (lights[i] !== greenA[i]) {
      gDif++;
    }
    if (lights[i] !== redA[i]) {
      rDif++;
    }
  }
  return Math.min(gDif, rDif);
}
