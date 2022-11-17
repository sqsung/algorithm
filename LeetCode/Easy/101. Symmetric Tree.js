//problem at : https://leetcode.com/problems/symmetric-tree/

function isSymmetric (root) { 
    return root === null ? true : compareLeftRight(root.left, root.right);
}

function compareLeftRight (left, right) {
    if (left === null && right === null) return true; 
    if (left === null || right === null) return false;
    if (left.val !== right.val) return false;
    
    return compareLeftRight(left.right, right.left) && compareLeftRight(left.left, right.right);
}