//can be found at: https://leetcode.com/problems/remove-duplicates-from-sorted-array

function removeDuplicates(nums) {
  for(let i = 1; i < nums.length; i++) {
    if(nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
}