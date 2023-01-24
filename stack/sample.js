class stack{
    constructor(){
        this.item=[]
    }
    
    push(elem){
        this.item.push(elem)
    }

    pop(){
        return this.item.pop()
    }

    peek(){
        console.log(this.item[this.item.length-1]); 
    }

    isEmpty(){
        return this.item.length===0
    }

    size(){
        console.log(this.item.length); 
    }

    display(){
        console.log(this.item.toString());
    }

}

const stacks = new stack()
stacks.push(20)
stacks.push(10)
stacks.push(30)
stacks.push(60)
stacks.push(2)
stacks.push(90)
stacks.size()

stacks.display()

stacks.pop()
stacks.pop()
stacks.size()
stacks.display()
stacks.peek()

