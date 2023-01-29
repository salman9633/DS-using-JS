function reverse(string) {
    let arr=string.split('')
    len=arr.length

    for(let i=0;i<len/2;i++){

        let temp=arr[i]
        arr[i]=arr[len-i-1]
        arr[len-i-1]=temp
        
    }
    return arr.join('')
}

console.log(reverse('qwert'));

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

    insertAfter(value){
        let newNode=new Node(value)

        
        if(this.size==0){
            this.head=newNode
            this.tail=newNode
        }else{
            this.tail.next=newNode
            this.tail=newNode
        }
        this.size++
    }

    display(){
        if(this.size==0){
            return null
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
}

const list= new LinkedList()

list.insertAfter(1)
list.insertAfter(2)
list.insertAfter(4)
list.insertAfter(6)
list.insertAfter(9)
list.display()

