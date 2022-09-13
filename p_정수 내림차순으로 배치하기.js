function solution(n) {
  let answer = 0,
    str = n.toString().split("").sort(),
    temp = [],
    len = str.length;

  for (i = 0; i < len; i++) {
    temp.push(str.pop());
  }

  answer = parseInt(temp.join(""));
  return answer; 
}

console.log(solution(118372));