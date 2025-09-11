// Design Singly Linked List

function Node(val) {
    this.val = val;
    this.next = null;
}

function MyLinkedList() {
    this.head = null;
    this.size = 0;
}

MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index > this.size) return -1;
    let curr = this.head;
    for (let i = 0; i < index; i++) {
        curr = curr.next;
    }
    return curr.val;
};

MyLinkedList.prototype.addAtHead = function (val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
};

MyLinkedList.prototype.addAtTail = function (val) {
    let newNode = new Node(val);
    if (!this.head) {
        this.head = newNode;
        return;
    }
    let curr = this.head;
    while (curr.next !== null) {
        curr = curr.next;
    }
    curr.next = newNode;
    this.size++;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 || index > this.size) return;
    if (index === 0) return this.addAtHead(val);
    if (index === this.size) return this.addAtTail(val);
    let newNode = new Node(val);
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
    this.size++;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index > this.size) return;
    if (index === 0) {
        this.head = this.head.next;
    } else {
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }
        curr.next = curr.next.next;
    }
    this.size--;
};


var obj = new MyLinkedList();
// var param_1 = obj.get(index);
obj.addAtHead(1);
obj.addAtTail(3);
obj.addAtIndex(1, 2);
console.log(obj);
obj.get(1);
obj.deleteAtIndex(1);
obj.get(3);
console.log(obj);

