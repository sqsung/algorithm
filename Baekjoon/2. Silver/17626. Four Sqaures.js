// const target = 26;
// const target = 11339;

const target = +require('fs').readFileSync('/dev/stdin').toString().trim();

const getMinNeeded = targetNumber => {
  const dp = Array.from({ length: targetNumber + 1 }, () => 0);
  dp[1] = 1;

  for (let i = 2; i <= targetNumber; i++) {
    let min = Number.MAX_SAFE_INTEGER;

    for (let j = 1; j * j <= i; j++) {
      min = Math.min(min, dp[i - j * j]);
    }

    dp[i] = min + 1;
  }

  return dp[targetNumber];
};

console.log(getMinNeeded(target));
