function Qsort(arr: number[]):number[] {
    if(arr.length<2){
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left: number[] = []
    let right: number[] = []
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] > pivot) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }

    }
    return [...Qsort(left), pivot, ...Qsort(right)]

}

console.log(Qsort([44,7,8,9,4,5,2,6]));
