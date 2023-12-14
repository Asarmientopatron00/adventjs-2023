function checkIsValidCopy(original, copy) {
  if (original.length !== copy.length) return false;
  const degradationSchema = (char) => [
    " ",
    ".",
    ":",
    "+",
    "#",
    char.toLowerCase(),
    char,
  ];
  function checkIfValidChar(a, b) {
    const schema = degradationSchema(a);
    const aOrder = schema.findIndex((char) => char === a);
    const bOrder = schema.findIndex((char) => char === b);
    return aOrder >= (bOrder === -1 ? 10000000 : bOrder);
  }
  for (let i = 0; i < original.length; i++) {
    if (!checkIfValidChar(original[i], copy[i])) return false;
  }
  return true;
}
