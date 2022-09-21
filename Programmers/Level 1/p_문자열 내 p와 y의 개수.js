function solution(s){
  let answer = true, arr = [];

  arr = (s.toLowerCase().split(''));
  let len = arr.length, count = 0;

  for (i = 0; i < len; i++) {
    if (arr[i] == 'p') {
      count++;
    } else if (arr[i] == 'y') {
      count--;
    }
  } 

  if (count != 0) {
    answer = false;
  }
  return answer;
}

console.log(solution("Pyy"));
