function solution(n) {
  let answer = 0;
  let arr = [];
  let str = n.toString();
  
  for (i = 0; i < str.length; i++) {
      arr.push(Number(str[i]));
  }

  for (j = 0; j < arr.length; j++) {
      answer += arr[j];
  }

  return answer;
}

