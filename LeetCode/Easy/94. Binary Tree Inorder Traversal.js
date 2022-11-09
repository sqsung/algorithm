function inorderTraversal(root) {
  let result = [];

  function traverse(node) {
    if (node === null) return; 
  
    if (node.left) traverse(node.left);
    result.push(node.val);
    if (node.right) traverse(node.right);
  }

  traverse(root);
  return result;  
}