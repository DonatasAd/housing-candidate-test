export default function same(str: String) {
  const lowerCase = str.toLowerCase();
  const d = (lowerCase.match(/d/g) || []).length;
  const k = (lowerCase.match(/k/g) || []).length;
  return d === k;
}
