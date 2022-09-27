function searchInsert(nums, target) {
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] === target) return i;
  } 
  
  if (!nums.includes(target)) {
      nums.push(target);
      nums.sort((a,b) => a - b);
      return nums.indexOf(target);
  }
};

//console.log(solution([1,3,5,6], 2))