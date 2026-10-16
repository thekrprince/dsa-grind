// LC 144. Binary Tree Preorder Traversal
// Root -> Left -> Right

import { buildTree } from "../utils/index.js";

// =================== RECURSIVE ===================

function preorderTraversal(root) {
	const ans = [];

	function traversal(curr) {
		if (!curr) return;

		ans.push(curr.val);
		traversal(curr.left);
		traversal(curr.right);
	}

	traversal(root);

	return ans;
}

const inputTree = buildTree([1, null, 2, 3]);
console.log(preorderTraversal(inputTree));

const inputTree1 = buildTree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]);
console.log(preorderTraversal(inputTree1));

// =================== ITERATIVE ===================

function preorderTraversal2(root) {
  const ans = [];
  let stack = [root];

  while(stack.length) {
    let curr = stack.pop();
    ans.push(curr.val);
    curr.right && stack.push(curr.right);
    curr.left && stack.push(curr.left);
  }

  return ans;
}

const inputTree2 = buildTree([1, null, 2, 3]);
console.log("iterative1", preorderTraversal2(inputTree2));

const inputTree3 = buildTree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]);
console.log("iterative2", preorderTraversal2(inputTree3));