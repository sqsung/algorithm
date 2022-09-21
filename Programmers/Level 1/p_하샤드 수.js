function solution(x) {
  let answer = true;
  
  let num = x.toString().split('');
  let sum = 0;
  
  for (const value of num) {
      sum += Number(value);
  }
  x % sum === 0 ? answer = true : answer = false;
  return answer;
}
