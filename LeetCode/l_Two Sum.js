function twoSum(nums, target) {
  let result = [];

  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target && i !== j) {
        result.push(i, j);
        break;
      }
    }
  }
  return result;
}

//console.log(twoSum([2, 5, 5, 11, 10], 10));