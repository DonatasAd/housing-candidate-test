export default function math(...numbers: number[]) {
  const numberArr = [...numbers];
  const squareSum = numberArr.reduce((a, b) => a + b * b, 0);
  return Math.sqrt(squareSum) / 2;
}
