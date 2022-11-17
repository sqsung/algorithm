//problem at : https://leetcode.com/problems/maximum-depth-of-binary-tree/

function minDepth(root) {
    if (!root) return 0;
    
    let left = minDepth(root.left);
    let right = minDepth(root.right);

    // Must consider when one side has a height of 1 (just the root node)
    if (left === 0 || right === 0) return 1 + Math.max(left, right);
    return 1 + Math.min(left, right);
}