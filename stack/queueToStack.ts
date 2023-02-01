class MyStack {
    arr: number[]
    constructor() {
        this.arr=[]
    }

    push(x: number): void {
        this.arr.push(x)
        for(let i=0;i<this.arr.length-1;i++){
            this.arr.push(this.arr.shift()!)
        }
    }

    pop(): any {
        this.arr.shift()

    }

    top(): any {
        return this.arr[0]

    }

    empty(): boolean {
        return this.arr.length==0
    }

    
}

const stack= new MyStack()
stack.push(1)
stack.push(51)
stack.push(8)
stack.push(0)
stack.top()
stack.pop()
stack.empty()
console.log(stack);

export {}

