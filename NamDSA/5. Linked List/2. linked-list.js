// Using function
function Node(value) {
    this.value = value;
    this.next = null;
}

function LinkedList() {
    this.head = null;
}

LinkedList.prototype.add = function (value) {
    const newNode = new Node(value);

    if (!this.head) {
        this.head = newNode;
        return;
    }

    let current = this.head;
    while (current.next !== null) {
        current = current.next;
    }

    current.next = newNode;
};

LinkedList.prototype.print = function () {
    let current = this.head;

    if (!current) {
        console.log("List is empty");
        return;
    }

    while (current.next !== null) {
        console.log(current);
        current = current.next;
    }
};

const list = new LinkedList();
list.print();
list.add(100);
list.add(200);
list.add(300);
list.add(400);
list.print();
