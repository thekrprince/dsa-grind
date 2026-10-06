// LC 94. Binary Tree Inorder Traversal
// Left -> Root -> Right

import { buildTree } from "../utils/index.js";

function inorderTraversal(root) {
  let ans = [];

  function traversal(curr) {
    if(!curr) return;
    traversal(curr.left);
    ans.push(curr.val);
    traversal(curr.right);
  }

  traversal(root);

  return ans;
}

const inputTree = buildTree([1, null, 2, 3]);
console.log(inorderTraversal(inputTree));

const inputTree1 = buildTree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]);
console.log(inorderTraversal(inputTree1));
