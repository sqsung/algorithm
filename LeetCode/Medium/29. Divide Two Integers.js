const divide = (dividend, divisor) => {
  const MAX = 2147483647;
  const MIN = -2147483648;
  const isNegative = (dividend < 0 && divisor < 0) || (dividend > 0 && divisor > 0) ? false : true;

  if (divisor === 0 || (dividend === MIN && Math.abs(divisor) === 1)) return isNegative ? MIN : MAX;
  else if (divisor === dividend) return 1;

  let absDividend = Math.abs(dividend);
  let absDivisor = Math.abs(divisor);
  let count = 0;

  while (absDividend >= absDivisor) {
    absDividend -= absDivisor;
    count++;
  }

  if (count > MAX) return isNegative ? MIN : MAX;

  return isNegative ? -count : count;
};

// Test Cases:
// console.log(divide(10, 3));
// console.log(divide(7, -3));
// console.log(divide(-1, -1));
// console.log(divide(-2147483648, -1));
// console.log(divide(2147483647, 3));
