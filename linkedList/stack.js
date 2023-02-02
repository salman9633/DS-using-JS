class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class stack{
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.Size
    }
    push(value){
          const newNode=new Node()
          if(this.isEmpty()){
            this.head=newNode
            this.tail=newNode
          }else{
            newNode.next=this.head
            this.head=newNode
          }
          this.size++
    }

    pop(){
        if(this.isEmpty()){
            return null
        } else{
            this.head=this.head.next
        }
        

    }




      




}