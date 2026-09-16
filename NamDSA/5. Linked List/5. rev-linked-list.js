import { arrayToList, listToArray } from "../utils/index.js";

// 206. Reverse Linked List
var reversedList = function (head) {
    let curr = head;
    let prev = null;

    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    return prev;
};

const list = arrayToList([1, 2, 3, 4, 5]);
const ans = reversedList(list);
console.log(ans);
console.log(listToArray(ans));
