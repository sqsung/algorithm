function preorder(root) {
  let result = [];
  
  function dfs(node) {
      if (!node) return;
      
      result.push(node.val);
      
      for (let child of node.children) {
          dfs(child);
      }
  }
  dfs(root);
  return result;
}

