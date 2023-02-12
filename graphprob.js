// class graph{
//     constructor(){
//         this.adjList={}
//     }

//     addVert(vertex){
//         if(!this.adjList[vertex]){
//             this.adjList[vertex]=vertex
//         }
//     }

//     addEdge(vertex1,vertex2){
//         if(!this.adjList[vertex1]){
//             this.adjList[vertex1]=vertex1
//         }
//         if(!this.adjList[vertex2]){
//             this.adjList[vertex2]=vertex2
//         }
//         this.adjList[vertex1]=add
//     }
// }

class Node{
    constructor(value){
        this.value=value
        this.next=null
    }

}

class Tree{

    constructor(){
        this.root=null
    }

    subTree(val){
        const newNode=new Node(val)

        if(this.root==null){
            this.root=newNode
        }else{
            this.root.next=newNode
            count++;
        }
        return count;
    }

}

const tree=new Tree()

tree.subTree(5)
tree.subTree(3)
tree.subTree(7)
