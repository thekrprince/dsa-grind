import { buildTree } from "../utils/index.js";
// Simple Level Order Traversal
function levelOrderTraversal(root) {
  let ans = [];
  let queue = [root];

  while(queue.length) {
    let curr = queue.shift();
    curr.val && ans.push(curr.val);
    curr.left && queue.push(curr.left);
    curr.right && queue.push(curr.right);
  }
  return ans;
}

const inputTree = buildTree([1, null, 2, 3]);
console.log(levelOrderTraversal(inputTree));

const inputTree1 = buildTree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]);
console.log(levelOrderTraversal(inputTree1));