// LC 145. Binary Tree Postorder Traversal

import { buildTree } from "../utils/index.js";

function postorderTraversal(root) {
  let ans = [];

  function traversal(curr) {
    if(!curr) return;

    traversal(curr.left);
    traversal(curr.right);
    ans.push(curr.val);
  }

  traversal(root);
  return ans;
}

const inputTree = buildTree([1, null, 2, 3]);
console.log(postorderTraversal(inputTree));

const inputTree1 = buildTree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]);
console.log(postorderTraversal(inputTree1));