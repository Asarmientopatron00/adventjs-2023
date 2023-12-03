function findNaughtyStep(original, modified) {
  const originalLength = original.length;
  const modifiedLength = modified.length;
  if (originalLength === modifiedLength) return "";
  const missing = originalLength > modifiedLength;
  for (let i = 0; i < Math.max(originalLength, modifiedLength); i++) {
    if (original[i] === undefined) return modified[i];
    if (modified[i] === undefined) return original[i];
    if (original[i] !== modified[i]) {
      return missing ? original[i] : modified[i];
    }
  }
  return "";
}
