//problem at : https://leetcode.com/problems/maximum-depth-of-binary-tree/

function maxDepth (root) {
    if (!root) return 0;
    let left = maxDepth(root.left),
        right = maxDepth(root.right);

    return 1 + Math.max(left, right);
};