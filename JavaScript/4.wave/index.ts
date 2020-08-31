export default function wave(str: String) {
  const lowerCase = str.toLowerCase();
  let result = [];
  for (let i = 0; i < lowerCase.length; i++) {
    if (lowerCase[i] === ' ') continue;
    const upperCase = lowerCase[i].toUpperCase();
    const lettersBefore = lowerCase.slice(0, i);
    const lettersAfter = lowerCase.slice(i + 1, lowerCase.length);
    result.push(`${lettersBefore}${upperCase}${lettersAfter}`);
  }
  return result;
}
