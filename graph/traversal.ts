import { Graph } from './graph'

class Traversal extends Graph {

    constructor(){
        super()
    }

    bfs(startNode:any){
        let visited:any={}
        let queue:any=[]
        visited[startNode]=true
        queue.push(startNode)
        while(queue.length!==0){
            let getQueueElem=queue.shift()
            console.log(getQueueElem);
            let getList=this.adjacencyList.get(getQueueElem)
            getList.forEach((i: any) => {
                let neigh=i
                if(!visited[neigh]){
                    visited[neigh]=true
                    queue.push(neigh)
                }
            });
        }
    }

}

export { Traversal }