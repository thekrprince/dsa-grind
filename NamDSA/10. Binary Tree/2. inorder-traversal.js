// LC 94. Binary Tree Inorder Traversal
// Left -> Root -> Right

import { buildTree } from "../utils/index.js";
// =================== RECURSIVE ===================
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

// =================== ITERATIVE ===================
function inorderTraversal1(root) {
  let stack = [];
  let curr = root;
  let ans = [];

  while(stack.length || curr) {
    while(curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    ans.push(curr.val);
    curr = curr.right;
  }

  return ans;
}

const inputTree2 = buildTree([1, null, 2, 3]);
console.log("iterative1", inorderTraversal1(inputTree2));

const inputTree3 = buildTree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]);
console.log("iterative2", inorderTraversal1(inputTree3));