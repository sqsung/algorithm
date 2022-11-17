/*
problem at : https://leetcode.com/problems/same-tree

1. if p and q are both null, return true; 
2. if p is null while q isn't, (or vice versa) return false; 
3. when values are not the same, return false; 
*/

function isSameTree(p, q) {
    if (p === null && q === null) {
        return true;
    } 

    if ((p === null && q !== null) || (p !== null && q === null) || (p.val !== q.val)) {
        return false; 
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
