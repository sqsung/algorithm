function postorderTraversal(root) {
  let result = [];

  function traverse(node) {
    if (node === null) return; 
  
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    result.push(node.val);
  }

  traverse(root);
  return result;  
}