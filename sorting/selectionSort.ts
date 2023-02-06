function selectionSort(arr: number[]) {
    let len=arr.length
    for (let j = 0; j < len - 1; j++) {
        // console.log(';');
        
        let index = j

        for (let i = j + 1; i < len; i++) {
            // console.log(';');
            
            if (arr[i] > arr[index]) {
                index = i
            }
        }
        
        let  smallest = arr[index]
        arr[index] = arr[j]
        arr[j] = smallest
    }
    return arr
}


console.log(selectionSort([3, 7, 4, 5, 2, -7,10]));
