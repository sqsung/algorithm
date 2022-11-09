var sortedArrayToBST = function(nums) {
  if(!nums.length) return null;

  let middle = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[middle]); 
   
  root.left = sortedArrayToBST(nums.slice(0, middle));
  root.right = sortedArrayToBST(nums.slice(middle + 1));
  
  return root;
};