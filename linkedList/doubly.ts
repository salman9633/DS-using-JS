class Node {
    value: (number | string)
    next: number|null
    prev: number|null


    constructor(value:any) {
        this.value = value
        this.next = null
        this.prev = null

    }
}

class doubly {
    head:any
    tail:any
    size:number
    constructor() {
       this.head=null
       this.tail=null
       this.size=0 
    }

    isEmpty(){
        return this.size===0
    }

    getSize(){
        return this.size
    }

    append(value:any){

        const newNode=new Node(value)
        if(this.isEmpty()){
            this.head=newNode;
            this.tail=newNode;
        }else{
            this.tail.next=newNode;
            newNode.prev=this.tail;
            this.tail=newNode;

        }
        this.size++

    }

    prepend(value:any){
        const newNode=new Node(value)

        if(this.isEmpty()){
            this.head=newNode
            this.tail=newNode
        }else{
            newNode.next=this.head
            this.head.prev=newNode
            this.head=newNode
        }
        this.size++
    }

    display(){
        if (this.isEmpty()) {
            console.log("EMPTY");
        }else{
            let curr=this.head
            let list=""

            while(curr){
                list+=`${curr.value} `
                curr=curr.next
            }
            console.log(list);
            
        }
    }

    displayReverse(){
        if(this.isEmpty()){
            console.log("none");
        }else{
            let revList=""
            let curr=this.tail

            while(curr){
                revList+=`${curr.value} `
                curr=curr.prev
            }
            console.log(revList);
            
        }
    }
}

const List=new doubly()
List.append(10)
List.prepend(20)
List.append(20)
List.append(30)
List.display()
List.displayReverse()



export { }