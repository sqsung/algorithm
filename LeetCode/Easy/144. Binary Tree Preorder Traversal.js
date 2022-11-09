function preorderTraversal(root) {
  let result = [];

  function traverse(node) {
    if (node === null) return; 
  
    result.push(node.val);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }

  traverse(root);
  return result;  
}