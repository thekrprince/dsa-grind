// LC 206. Reverse Linked List

import { arrayToList } from "../../LeetCode/arrayToLinkedList"

function reverseLinkedList(head) {
    let prev = null;
    let curr = head.next;
    
    while(curr) {
        let temp = curr;
        curr = prev;
        
    }
}


const list1 = arrayToList([1,2,3,4,5]);
console.log(reverseLinkedList(list1));