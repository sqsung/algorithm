//can be found at: https://leetcode.com/problems/single-number/

// --- solution 1 --- //
function singleNumber(nums) {
  return (nums.filter(x => nums.filter(y => x === y).length === 1)).join('');
}

// --- solution 2 --- //
function singleNumber(nums) {
  let res = 0;

  for(let i = 0; i < nums.length; i++) {
    if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) return nums[i];
  }
}

//console.log(singleNumber([4,1,2,1,2]));

