const treeify= require('treeify')
//--------------------------MIN HEAP------------------------------------
class MinHeap {
    constructor() {
        this.heap = [null];
    }

    insert(num) {
        this.heap.push(num)
        if (this.heap.length > 2) {
            let idx = this.heap.length - 1;
            while (this.heap[idx] < this.heap[Math.floor(idx / 2)]) {
                if (idx >= 1) {
                    [this.heap[Math.floor(idx / 2)], this.heap[idx]] = [this.heap[idx], this.heap[Math.floor(idx / 2)]]; // swaps parent and child elements using array destructuring
                    if (Math.floor(idx / 2) > 1) {
                        idx = Math.floor(idx / 2); // sets index to next above parent element for checking condition
                    } else { 
                        break;
                    }
                }
            }
        }
    }

    remove() {
        let smallest = this.heap[1]
        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length - 1] // makes first element equal to the last element
            this.heap.splice(this.heap.length - 1);
            if (this.heap.length == 3) {
                if (this.heap[1] > this.heap[2]) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
                }
                return smallest
            }
            let i = 1
            let left = 2 * i
            let right = 2 * i + 1
            while (this.heap[i] >= this.heap[right] || this.heap[i] >= this.heap[left]) {
                if (this.heap[left] < this.heap[right]) {
                    [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
                    i = i * 2

                } else {
                    [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
                    i = i * 2 + 1
                }
                left = 2 * i;
                right = 2 * i + 1;
                if (this.heap[right] == undefined || this.heap[left] == undefined) {
                    break;
                }
            }
        }
        else if (this.heap.length == 2) {
            this.heap.splice(1, 1)
        } else {
            return null;
        }
        return smallest;
    }
}

const minHeap = new MinHeap()
minHeap.insert(10)
minHeap.insert(20)
minHeap.insert(5)
minHeap.insert(2)
minHeap.insert(1)
console.log(minHeap.heap);
console.log(minHeap.remove());
console.log(minHeap.heap);

console.log(treeify.asTree(minHeap,true));