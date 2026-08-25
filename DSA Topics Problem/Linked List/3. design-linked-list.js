// 707. Design Linked List
// Solving this Leetcode problem using constructor Functions

function Node(value) {
    this.value = value;
    this.next = null;
}

function MyLinkedList() {
    this.head = null;
    this.size = 0;
}

MyLinkedList.prototype.addAtHead = function (value) {
    let newNode = new Node(value);
    if (this.size === 0) {
        this.head = newNode;
    } else {
        newNode.next = this.head;
        this.head = newNode;
    }
    this.size++;
};

MyLinkedList.prototype.addAtTail = function (value) {
    let current = this.head;

    for (let i = 0; i < this.size; i++) {
        current = current.next;
    }

    let newNode = new Node(value);
    current.next = newNode;
    this.size++;
};

MyLinkedList.prototype.addAtIndex = function (index, value) {
    if (index < 0 || index >= this.size) {
        return;
    }
    if (index === 0) {
        return this.addAtHead(value);
    } else if (index === this.size - 1) {
        return this.addAtTail(value);
    } else {
        let current = this.head;

        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        const newNode = new Node(value);
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
    }
};

MyLinkedList.prototype.deleteAtIndex = function (index, value) {
    if (index < 0 || index >= this.size) return;

    let current = this.head;

    for (let i = 0; i < index; i++) {
        current = current.next;
    }
    current.next = current.next.next;
    this.size--;
};

MyLinkedList.prototype.print = function () {
    let values = [];
    let current = this.head;

    while (current.next) {
        values.push(current.value);
    }

    console.log(values.join(" -> "), " -> null");
};

const ll = new MyLinkedList();
ll.addAtHead(23);
ll.print();