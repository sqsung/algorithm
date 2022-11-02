//can be found at: https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  let num = 0;
  let temp = [];

  for(let i = 0; i < numbers.length; i++) {
    num = numbers[i];

    for(let j = 0; j < numbers.length; j++) {
      if(j === i) break;
      
      let sum = num + numbers[j];
      if (temp.length === 0) temp.push(sum);
      else if (!temp.includes(sum)) temp.push(sum);
    }
  }

  return temp.sort((a,b) => a-b);
}

// console.log(solution([2,1,3,4,1]));