class Queue{
    item: any[];
    constructor(){
        this.item=[]
    }

    enqueue(data:any){
        this.item.push(data)
    }

    dequeue(){
        this.item.shift()
    }

    isEmpty(){
        return this.item.length===0
    }


}

const queue=new Queue()

queue.enqueue(40)
queue.enqueue(30)
queue.enqueue(20)
queue.enqueue(1)
queue.dequeue()

console.log(queue);
