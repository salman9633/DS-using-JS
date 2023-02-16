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

const treeify=require ('treeify')



// function printTree(tree) {
//     if (!tree || !tree.root) {
//       console.log("The tree is empty.");
//       return;
//     }
  
//     const printNode = node => {
//       console.log(node.value);
//       if (node.next) {
//         printNode(node.next);
//       }
//     };
  
//     printNode(tree.root);
//   }
  



// printTree(tree)

console.log(treeify.asTree(tree,true));
