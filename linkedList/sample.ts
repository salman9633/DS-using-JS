class LinkedListNode {
    value: any;
    next: LinkedListNode | null;
    constructor(value: any) {
        this.value = value
        this.next = null


    }
}

class LinkedList {
    head: LinkedListNode | null | any;
    size: number

    constructor() {
        this.head = null
        this.size = 0
    }



    prepend(value: any) {
        const newNode = new LinkedListNode(value)
        if (this.isEmpty()) {
            this.head = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.size++

    }

    append(value: any) {
        const newNode = new LinkedListNode(value)
        if (this.isEmpty()) {
            this.head = newNode
        } else {
            let prev: any = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = newNode
        }
        this.size++
    }

    insert(value: any, index: number) {
        if (index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            const newNode = new LinkedListNode(value)
            let prev: any = this.head
            for (let i = 0; i < index; i++) {
                prev = prev.next
            }
            newNode.next = prev.next
            prev.next = newNode
            this.size++
        }

    }

    
    remove(index: any) {
        if (index < 0 || index >= this.size) {
            return null
        }
        let removeNode: any;
        if (index === 0) {
            removeNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next

        }
        this.size--
        return removeNode.value

    }
    removeValue(value: any) {
        if (this.isEmpty()) {
            return null
        }
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            while (prev.next && prev.next.value != value) {
                prev = prev.next
            }
            let removedNode;
            if (prev.next) {
                removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value
            }
            return null
        }
    }

    search(value: any) {
        if (this.isEmpty()) {
            return -1
        }
        let i = 0;
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                return i
            }
            curr = curr.next
            i++;

        }
        return -1
    }

    searchValue(index: any) {
        if (this.isEmpty() || index < 0 || index > this.size) {
            return -1
        }

        let curr = this.head
        for (let i = 0; i < index; i++) {
            curr = curr.next
        }

        let val = curr.value
        return val


    }

    reverse() {
        let prev = null
        let curr = this.head
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    sum(): number {
        let sum = 0
        let curr = this.head

        while (curr) {
            sum += curr.value
            curr = curr.next
        }

        return sum
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    display() {
        if (this.isEmpty()) {
            console.log("empty");

        } else {
            let curr = this.head
            let listValues = ""

            while (curr) {
                listValues += curr.value
                curr = curr.next
            }
            console.log(listValues);

        }
    }

}

const List = new LinkedList()


List.append(10)
List.append(30)
List.append(60)
List.prepend(45)
// List.append("a")

List.insert(5, 6)

List.display()
console.log(List.searchValue(0), ';;;;;;;;;;;;');

console.log(List.search("a"));
List.reverse()


// console.log(List.removeValue(10));

// console.log(List.remove(0));
List.display()
console.log("is empty?", List.isEmpty());
console.log("size?", List.getSize());
console.log("sum: ", List.sum());

export { LinkedList }




