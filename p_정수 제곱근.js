function solution(n) {
  let answer = 0;
  let sqrd = Math.sqrt(n);
  
  if (Number.isInteger(sqrd)) {
       answer = (sqrd + 1) * (sqrd + 1);
  } else {
      answer = -1;
  }
  
  return answer;
}