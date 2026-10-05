// 1. Definition for a binary tree node
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// 2. Helper to build tree from a level-order array (LeetCode format)
export function buildTree(arr) {
  if (!arr || arr.length === 0 || arr[0] === null) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    const curr = queue.shift();

    // Attach left child
    if (i < arr.length && arr[i] !== null) {
      curr.left = new TreeNode(arr[i]);
      queue.push(curr.left);
    }
    i++;

    // Attach right child
    if (i < arr.length && arr[i] !== null) {
      curr.right = new TreeNode(arr[i]);
      queue.push(curr.right);
    }
    i++;
  }

  return root;
}