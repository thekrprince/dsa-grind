// 876. Middle of the Linked List

import { arrayToList } from "./arrayToLinkedList";

// LC 876. Middle of the Linked List
function middleNode(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

let list1 = arrayToList([1,2,3,4,5]);
console.log(middleNode(list1));

let list2 = arrayToList([1,2,3,4,5, 6]);
console.log(middleNode(list2));