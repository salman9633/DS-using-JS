class Heap {
    constructor() {
        this.heap = [null]
    }

    heapify(data) {
        this.heap.push(data)
        if (this.heap.length > 2) {
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
    
}




const HEAP = new Heap()
let arr=[3,5,6,1,90,40,45,0,7]
for (let i = 0; i < arr.length; i++) {
    HEAP.heapify(arr[i])
    
}
console.log(HEAP.heap);