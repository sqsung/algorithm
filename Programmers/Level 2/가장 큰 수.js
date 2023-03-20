const solution = numbers => {
  const answer = numbers
    .map(c => c + '')
    .sort((a, b) => b + a - (a + b))
    .join('');

  return answer[0] === '0' ? '0' : answer;
};

// Test Cases:
// console.log(solution([6, 10, 2]));
// console.log(solution([3, 30, 34, 5, 9]));
