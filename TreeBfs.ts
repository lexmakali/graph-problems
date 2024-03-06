class TreeNode {
    value: number;
    children: TreeNode[];
  
    constructor(value: number) {
      this.value = value;
      this.children = [];
    }
  }
  
  function bfs(treeRoot: TreeNode | null): number[] {
    const result: number[] = [];
    const queue: TreeNode[] = [];
  
    if (treeRoot) {
      queue.push(treeRoot);
  
      while (queue.length > 0) {
        const currentNode = queue.shift()!;
        result.push(currentNode.value);
  
        for (const child of currentNode.children) {
          queue.push(child);
        }
      }
    }
  
    return result;
  }

  function dfs(treeNode: TreeNode | null): number[] {
    const result: number[] = [];
  
    function traverse(node: TreeNode | null): void {
      if (!node) {
        return;
      }
  
      result.push(node.value);
  
      for (const child of node.children) {
        traverse(child);
      }
    }
  
    traverse(treeNode);
  
    return result;
  }  
  
  // Example usage:
  // Create a simple tree
  const root = new TreeNode(1);
  root.children = [new TreeNode(2), new TreeNode(3)];
  root.children[0].children = [new TreeNode(4), new TreeNode(5)];
  root.children[1].children = [new TreeNode(6)];
  
  // Perform BFS
  const result = bfs(root);
  console.log(result);
  