class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

    arrayToList(arr){

        for(let i=0;i<arr.length;i++){
            
            const newNode=new Node(arr[i])

            if (this.head==null) {
                this.head=newNode
                this.tail=newNode
            } else {
                this.tail.next=newNode
                this.tail=newNode
            }
            this.size++

        }
    }

    display(){
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

const list=new LinkedList()
list.arrayToList([2,3,4,1,6,7])
list.display()