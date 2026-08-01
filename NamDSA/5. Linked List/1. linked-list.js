// Step 1: Define the Node
class Node {
    constructor(val) {
        this.value = val;
        this.next = null; // Points to nothing initially
    }
}

// Step 2: Define the Linked List
class LinkedList {
    constructor() {
        this.head = null; // List starts empty
    }

    // Add a node to the end
    add(value) {
        const newNode = new Node(value);

        // Case 1: If list is empty, new node becomes the head
        if (!this.head) {
            this.head = newNode;
            return;
        }

        // Case 2: Walk to the last node
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }

        // Attach the new node
        current.next = newNode;
    }


    // Method 1: Print to Console
    // This method prints each node value sequentially as it traverses the list.
    // Traverses and print each node's value
    print() {
        let current = this.head;

        // Handle empty list edge case
        if (!current) {
            console.log("List is empty");
            return;
        }

        while (current) {
            console.log(current);
            current = current.next; // Move to the next clue/node
        }
    }

    // Method 2: Format as a Visual String (Recommended)
    printList() {
        let current = this.head;
        const values = [];

        while (current) {
            values.push(current.value);
            current = current.next;
        }

        console.log(values.join(" -> ") + " -> null");
    }
}

// Usage
const list = new LinkedList();
// list.print();
list.printList();
list.add(10);
list.add(20);
list.add(30);
list.add(40);
// list.print();
list.printList();
