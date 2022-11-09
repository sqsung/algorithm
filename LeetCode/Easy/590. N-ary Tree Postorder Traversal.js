function postorder(root) {
  let result = [];

  function dfs(node) {
    if (!node) return;

    for (let child of node.children) {
      dfs(child);
    }

    result.push(node.val);
  }
  dfs(root);
  return result;
}