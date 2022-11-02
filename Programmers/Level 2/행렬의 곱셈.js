//problem at: https://school.programmers.co.kr/learn/courses/30/lessons/12949

function solution(arr1, arr2) {
  let sum = 0, temp = [], answer = [];

  for(let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2[0].length; j++) {
      for(let k = 0; k < arr2.length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      temp.push(sum);
      sum = 0;
    }
    answer.push(temp);
    temp = [];
  }
  return answer;
}

/* TC
console.log(solution([[1, 2, 3], [4, 5, 6]], [[1, 4], [2, 5], [3, 6]]));
console.log(solution([[1, 4], [3, 2], [4, 1]],	[[3, 3], [3, 3]]));
console.log(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]],	[[5, 4, 3], [2, 4, 1], [3, 1, 1]]));
*/