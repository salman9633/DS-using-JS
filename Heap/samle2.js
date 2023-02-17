class Heap {
    constructor() {
        this.heap = [null]
    }


    insert(data) {
        this.heap.push(data)
        if (this.heap.length > 2) {
            let index = this.heap.length - 1
            while (this.heap[index] < this.heap[Math.floor(index / 2)]) {
                if (index > 1) {
                    [this.heap[Math.floor(index / 2)], this.heap[index]] = [this.heap[index], this.heap[Math.floor(index / 2)]]
                    if (Math.floor(index / 2)) {
                        index = Math.floor(index / 2)
                    } else {
                        break
                    }
                }
            }
        }
    }

    delete(arr = this.heap, limit) {
        let val = arr[1]
        let x = arr[limit]
        arr[1] = arr[limit]
        arr[limit] = val
        let i = 1
        let j = 2 * i
        while(j<limit){
            if(j<limit-1&&arr[j+1]>arr[j]){
                j=j+1;
            }
            if(arr[i]<arr[j]){
                temp=arr[j]
                arr[j]=arr[i]
                arr[i]=temp
                i=j
                j=2*j
            }else{
                break
            }
        }
        return val
    }

}

const HEAP = new Heap()
HEAP.insert(7)
HEAP.insert(6)
HEAP.insert(0)
HEAP.insert(5)
HEAP.insert(30)
HEAP.insert(4)

for (let i = HEAP.heap.length-1; i >1; i--) {
    HEAP.delete(i)
}
console.log(HEAP.heap);