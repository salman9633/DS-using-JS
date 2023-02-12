class Node {
    value: number
    left: number | null
    right: number | null
    constructor(value: number) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    root: any
    constructor() {
        this.root = null
    }

    insert(data: number) {
        let currentNode = this.root
        let val=new Node(data)
        if (currentNode == null) {
            this.root = val
            return
        }
        while (true) {
            if (data < currentNode.value) {
                if(currentNode.left==null){
                    currentNode.left= val
                    break;
                }else{
                    currentNode=currentNode.left
                }
            }else{
                if(currentNode.right==null){
                    currentNode.right= val
                    break;
                }else{
                    currentNode=currentNode.right
                } 
            }
        }
    }

    contain(data:number){
        let currentNode = this.root

        while (currentNode != null) {
          if(data<currentNode.value){
            currentNode=currentNode.left
          } else if(data>currentNode.value){
            currentNode=currentNode.right
          }else{
            return true
          }
        }
        return false

    }
}

const bst= new BST()

bst.insert(5)
bst.insert(6)
bst.insert(8)
bst.insert(1)
bst.insert(7)

console.log(bst.contain(7));

export { }