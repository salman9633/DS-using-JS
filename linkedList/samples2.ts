class Node {
    value: any
    next: (Node | null)
    constructor(value: any) {
        this.value = value
        this.next = null
    }

}

class LinkedList {
    head: any
    tail: any
    size: number
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    append(value: any) {
        const newNode = new Node(value)

        if (this.size == 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
            newNode.next = null
        }
        this.size++;
    }

    insertAfter(valueAfter: any, data: any) {
        const newNode = new Node(data)
        let temp = this.head

        while (temp != null && temp.value != valueAfter) {

            temp = temp.next
        }
        if (temp == null) {
            return -1
        }
        if (temp == this.tail) {
            this.tail.next = newNode
            this.tail = newNode
            return
        }
        newNode.next = temp.next
        temp.next = newNode
        this.size++;
    }

    insertBefore(beforeVal:any,data:any){
        const newNode=new Node(data)
        let temp=this.head
        
        while (temp!=null&&temp.next.value!=beforeVal) {
            temp=temp.next
        }
        if(temp==null){
            return -1
        }
        if(temp==this.tail){
            newNode.next=this.tail
            this.tail=newNode
            return
        }
        newNode.next=temp.next
        temp.next=newNode
        
    }
    
    insertMiddle(value:any){
        const newNode=new Node(value)
        let middle=Math.floor(this.size/2)
        console.log(middle);
        let temp=this.head

        let i=0;
        while (i<middle-1) {
            temp=temp.next;
            i++;
        }

        newNode.next=temp.next
        temp.next=newNode
        this.size++
        
    }

    display() {
        if (this.size == 0) {
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

const list = new LinkedList()
list.append(20)
list.append(40)
list.append(10)
list.insertAfter(40,11)
list.insertBefore(40,11)
list.insertMiddle(55)
list.display()


export { }