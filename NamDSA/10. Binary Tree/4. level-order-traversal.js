import { buildTree } from "../utils/index.js";
// Simple Level Order Traversal
function levelOrderTraversal(root) {
  let ans = [];
  let queue = [root];

  while(queue.length) {
    let curr = queue.shift();
    ans.push(curr.val);
    curr.left && queue.push(curr.left);
    curr.right && queue.push(curr.right);
  }
  return ans;
}

const inputTree = buildTree([1, null, 2, 3]);
console.log(levelOrderTraversal(inputTree));

const inputTree1 = buildTree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]);
console.log(levelOrderTraversal(inputTree1));

// Simple Level Order Traversal
function levelOrderTraversal2(root) {
  let ans = [];
  let queue = [root];

  while(queue.length) {
    let len = queue.length;
    let i=0;
    let res = [];
    while(i < len) {
      let curr = queue.shift();
      res.push(curr.val);
      curr.left && queue.push(curr.left);
      curr.right && queue.push(curr.right);
      i++;
    }
    ans.push(res);
  }
  return ans;
}

const inputTree2 = buildTree([1, null, 2, 3]);
console.log(levelOrderTraversal2(inputTree2));

const inputTree3 = buildTree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]);
console.log(levelOrderTraversal2(inputTree3));

const inputTree4 = buildTree([3,9,20,null,null,15,7]);
console.log(levelOrderTraversal2(inputTree4));