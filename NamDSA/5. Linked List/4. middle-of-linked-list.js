import { arrayToList, listToArray } from "../utils/index.js";

// LC 876. Middle of the Linked List
var middleNode = function (head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};

const list = arrayToList([1, 2, 3, 4, 5]);
const ans = middleNode(list);
console.log(listToArray(ans));

const list1 = arrayToList([1, 2, 3, 4, 5, 6]);
const ans1 = middleNode(list1);
console.log(listToArray(ans1));

const list2 = arrayToList([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const ans2 = middleNode(list2);
console.log(listToArray(ans2));