function quickSort(arr: number[]) {
    helperfn(arr, 0, arr.length - 1)
    return arr
}

function helperfn(arr: number[], start: number, end: number) {
    if (start >= end) {
        return
    }
    let pivot = start
    let i = start + 1
    let j = end

    while (i <= j) {
        if (arr[i] > arr[pivot] && arr[j] < arr[pivot]) {
            swap(arr, i, j);
            i++
            j--
        }
        if (arr[i] <= arr[pivot]) {
            i++
        }
        if (arr[j] >= arr[pivot]) {
            j--
        }

    }
    swap(arr, j, pivot)
    helperfn(arr, start, j - 1)
    helperfn(arr, j + 1, end)
}

function swap(a: number[], i: number, j: number) {
    let temp = a[i]
    a[i] = a[j]
    a[j] = temp
}


console.log(quickSort([3, 55, 7, 6, 5, 0, 0, 6, 4, 5, 3333, 5]));
