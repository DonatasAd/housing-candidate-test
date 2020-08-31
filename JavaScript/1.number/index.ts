export default function number(numbers: number[]) {
  if (numbers.length > 0) {
    const avarage = numbers.reduce((a, b) => a + b) / numbers.length;
    return Math.round(avarage);
  }
  return null;
}
