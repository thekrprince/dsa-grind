// Implementation of Singly Linked List using Class
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addAtHead(val) {
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    addAtTail(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while(curr.next !== null) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
        this.size++;
    }

    addAtIndex(index, val) {
        if(index < 0 || index > this.size) return;
        if(this.size === 0) return this.addAtHead(val);
        if(this.size === index) return this.addAtTail(val);
        let curr = this.head;
        for(let i=0; i<index; i++) {
            curr = curr.next;
        }
        let newNode = new Node(val);
        newNode.next = curr.next;
        curr.next = newNode;
        this.size++;
    }

    // Get value at index
    get(index) {
        if(index < 0 || index > this.size) return -1;
        let curr = this.head;
        for(let i=0; i < index; i++) {
            curr = curr.next;
        }
        return curr.val;
    }

    deleteAtIndex(index) {
        if(index < 0 || index > this.size) return;
        if(index === 0) {
            this.head = this.head.next;
        } else {
            let curr = this.head;
            for(let i=0; i< index-1; i++) {
                curr = curr.next;
            }
            curr.next = curr.next.next;
            this.size--;
        }
    }

    print() {
        let current = this.head;
        let result = "";
        while (current) {
        result += current.val + " -> ";
        current = current.next;
        }
        result += "null";
        console.log(result);
    }
}

const list = new LinkedList();

list.addAtHead(10);
list.addAtTail(20);
list.addAtTail(30);
list.addAtIndex(1, 15);

list.print();

console.log(list.get(2)); // 20

list.deleteAtIndex(1);
list.print();