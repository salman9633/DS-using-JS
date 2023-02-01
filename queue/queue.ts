class Node {
    value: any
    next: Node | null
    constructor(value: any) {
        this.value = value
        this.next = null
    }

}

class Queue {

    head: any
    tail: any
    size: number
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    push(value: any) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++
    }

    pop(){
        if(this.head.next==null){
            this.head=null
            this.tail=null
        }else{
            this.head=this.head.next   
        }
        this.size--
    }

    display() {
        if (this.isEmpty()) {
            return null
        } else {
            let curr = this.head
            let list = ""

            while (curr) {
                list += `${curr.value} `
                curr = curr.next
            }
            console.log(list);

        }

    }


}

const List = new Queue()
List.push(10)
List.push(30)
List.push(20)
List.push(1)
List.pop()
List.display()

export { }