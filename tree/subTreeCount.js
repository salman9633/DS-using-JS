const treeify = require('treeify')

class Node{
    constructor(value){
        this.value=value
        this.arr=[]
        // this.next=null
    }


    subTree(val){
        const newNode=new Node(val)
            this.arr.push(newNode)
            // this.root.next=this.arr 
    }

}

const tree=new Node(5)

tree.subTree(5)
tree.subTree(2)
tree.subTree(3)
tree.subTree(4)
tree.subTree(6)
tree.subTree(7);

console.log(treeify.asTree(tree,true));

