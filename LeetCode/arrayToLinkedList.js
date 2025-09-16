// Convert array to Linked List

function Node(val) {
    this.val = val;
    this.next = null;
}

export function arrayToList(arr) {
    let newNode = new Node(0);
    let curr = newNode;

    for(let num of arr) {
        curr.next = new Node(num);
        curr = curr.next;
    }
    return newNode.next;
}