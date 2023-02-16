const treeify=require('treeify')

class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BST{
    constructor(){
        this.root=null
    }

    insert(value){
        const newNode=new Node(value)

        if(this.root===null){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left==null){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right==null){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    depthCount(root){
        if(root==null){
            return 0
        }else{
            let leftDepth=this.depthCount(root.left)
            let rigthDepth=this.depthCount(root.rigth)
            return Math.max(leftDepth,rigthDepth)+1
        }

    }

}


let bst=new BST()

bst.insert(10)
bst.insert(5)
bst.insert(6)
bst.insert(12)
bst.insert(4)
bst.insert(1)
bst.insert(14)
bst.insert(13)
bst.insert(3)
bst.insert(20)

console.log(bst.depthCount(bst.root));
console.log(treeify.asTree(bst,true));