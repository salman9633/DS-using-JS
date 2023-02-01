class MyQueue {
    arr:number[]
    constructor() {
        this.arr=[]
    }

    push(x: number): void {
        this.arr.push(x)
        // for(let i=0;i<this.arr.length-1;i++){
        //     this.arr.push()
        // }
    }

    pop() {
        return this.arr.shift()
    }

    // peek(): number {

    // }

    // empty(): boolean {

    // }
}

const stack=new MyQueue()
stack.push(16)
stack.push(14)
stack.push(14)
stack.push(13)
stack.push(12)
stack.push(0)
stack.pop()

console.log(stack);



export {}