// LC 707. Design Linked List
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
        const newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    addAtIndex(index, val) {
        if (index < 0 || index > this.size) {
            return;
        }

        if (index === 0) {
            return this.addAtHead(val);
        } else if (index === this.size) {
            return this.addAtTail(val);
        } else {
            const newNode = new Node(val);
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current.next = current;
            }
            newNode.next = current.next;
            current.next = newNode;
            this.size++;
        }
    }

    get(index) {
        if (index < 0 || index > this.size - 1) {
            return -1;
        } else {
            let current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            console.log(current.val);
            // return current.val;
        }
    }

    deleteAtIndex(index) {
        if (index < 0 || index > this.size - 1) {
            return;
        } else {
            if (index === 0) {
                this.head = this.head.next;
            } else {
                let current = this.head;
                for (let i = 0; i < index - 1; i++) {
                    current = current.next;
                }
                current.next = current.next.next;
            }
            this.size--;
        }
    }

    print() {
        let current = this.head;
        let values = [];

        while (current) {
            values.push(current.val);
            current = current.next;
        }

        console.log(values.join(" -> "), "-> null");
    }
}

const ll = new LinkedList();
ll.addAtHead(4);
ll.print();
// ll.get(0);
ll.addAtHead(3);
ll.print();
// ll.get(0);
ll.addAtIndex(1, 5);
ll.print();
// ll.get(1);
ll.addAtTail(9);
ll.addAtTail(15);
// ll.get(4);
ll.print();

ll.deleteAtIndex(1);
ll.print();