function solution(x, n) {
  let answer = [], org_x = x;
  for (let i = 0; i < n; i++) {
      answer.push(x);
      x += org_x;
  }
  return answer;
}
