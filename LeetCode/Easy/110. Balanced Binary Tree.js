// problem at: https://leetcode.com/problems/balanced-binary-tree/

function isBalanced(root) {
    let result = true; 
    
     function depthOf(node) {
        if (node === null) return 0;

        let left = depthOf(node.left),
            right = depthOf(node.right);
            
        if (Math.abs(left - right) > 1) result = false;
        return 1 + Math.max(left, right);
    }   
    
    depthOf(root);
    return result;
}

/*
function isBalanced(root) {
    if (root === null) return true;

    let l = heightOf(root.left);
    let r = heightOf(root.right);

    return Math.abs(l - r) <= 1 && isBalanced(root.left) && isBalanced(root.right)
}

function heightOf(node) {
    if (!node) return 0;
    return 1 + Math.max(heightOf(node.left), heightOf(node.right));
}

*/