//can be found at: https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  let max = nums.length / 2;
  let set = new Set([...nums]);

  return set.size >= max ? max : set.size; 
}

//console.log(solution([3, 3, 3, 3, 3, 4, 4, 4, 4, 2, 2]))