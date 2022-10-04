//can be found at: https://school.programmers.co.kr/learn/courses/30/lessons/12953

function solution(arr) {
  let max = Math.max(...arr);
  let x = 0;

  while(true){
    x += max;

    for(let i = 0; i < arr.length; i++) {
      if(x % arr[i] !== 0) break; 
      if(i === arr.length - 1 && x % arr[i] === 0) return x;
    }
  }
}

// console.log(solution([2,6,8,14]));