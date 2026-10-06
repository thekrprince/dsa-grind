// LC 144. Binary Tree Preorder Traversal
// Root -> Left -> Right

import { buildTree } from "../utils/index.js";

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
