class Graph{
    adjacencyList:any
    constructor(){
        this.adjacencyList={}
    }

    addVertex(vertex:any){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]= new Set()
        }  
    }

    addEdge(vertex1:any,vertex2:any){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    removeEdge(vertex1:any,vertex2:any){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex:any){
        if(!this.adjacencyList[vertex]){
            return
        }
        for (const adjacentVertex of this.adjacencyList[vertex]) {
           this.removeEdge(vertex,adjacentVertex) 
        }
        delete this.adjacencyList[vertex]
    }

    display(){
        for (let vertex in this.adjacencyList){
            console.log(vertex,"->",[...this.adjacencyList[vertex]]);
            
        }
    }
}

const graph= new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A","B")
graph.addEdge("B","C")

graph.display()
graph.removeVertex("B")
graph.display()

export {}