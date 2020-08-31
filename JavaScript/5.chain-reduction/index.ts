export default function chainReduction(text: String) {
  return Array.from(text).reduce((a, b) => {
    const lastLetter = a.slice(-1);
    const isLastLetterCap = lastLetter === lastLetter.toUpperCase();
    const isNextLetterCap = b === b.toUpperCase();
    if (lastLetter.toLowerCase() === b.toLowerCase() && isLastLetterCap !== isNextLetterCap) {
      return a.substring(0, a.length - 1);
    }
    return a + b;
  });
}
