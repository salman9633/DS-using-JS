class Heap {
    constructor() {
        this.heap = []
    }

    minHeap(data) {
        this.heap.push(data)
        if (this.heap.length > 1) {
            let index = this.heap.length - 1
            while (this.heap[index] < this.heap[Math.floor(index / 2)]) {
                if (index >= 1) {
                    [this.heap[Math.floor(index / 2)], this.heap[index]] = [this.heap[index], this.heap[Math.floor(index / 2)]]
                    if (Math.floor(index / 2) > 1) {
                        index = Math.floor(index / 2)
                    } else {
                        break
                    }
                }
            }
        }
    }


    maxHeap(data) {
        this.heap.push(data)
        if (this.heap.length > 2) {
            let index = this.heap.length - 1
            while (this.heap[index] > this.heap[Math.floor(index / 2)]) {
                if (index >= 1) {
                    [this.heap[Math.floor(index / 2)], this.heap[index]] = [this.heap[index], this.heap[Math.floor(index / 2)]]
                    if (Math.floor(index / 2) > 1) {
                        index = Math.floor(index / 2)
                    } else {
                        break
                    }
                }
            }
        }
    }

    remove(){
        let temp=this.heap[0]
        this.heap[0]=this.heap[this.heap.length]
        this.heap[this.heap.length]=temp
        this.shiftDown(0)
    }

    shiftDown(currIdx){
        let endIdx=this.heap.length
        let leftIdx=2*currIdx+1

        while(leftIdx<endIdx){
            let rightIdx=2*currIdx+2
            let idxToShift;
            if(rightIdx<endIdx && this.heap[rightIdx]<this.heap[leftIdx]){
                idxToShift=rightIdx
            }else{
                idxToShift=leftIdx
            }

            if(this.heap[currIdx]<this.heap[idxToShift]){
                let temp = this.heap[currIdx]
                this.heap[currIdx]=this.heap[idxToShift]
                this.heap[idxToShift]=temp
                currIdx=idxToShift
                leftIdx=2*currIdx+1
            }else{
                return
            }
            
        }
    }

    

}

const heaps = new Heap

heaps.minHeap(2)
heaps.minHeap(0)
heaps.minHeap(6)
heaps.minHeap(34)
heaps.minHeap(7)
heaps.minHeap(10)
heaps.minHeap(9)


// heaps.maxHeap(0)
// heaps.maxHeap(6)
// heaps.maxHeap(34)
// heaps.maxHeap(7)
// heaps.maxHeap(10)
// heaps.maxHeap(9)
console.log(heaps.heap);
heaps.remove()
console.log(heaps.heap);
