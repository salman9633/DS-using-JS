function findNthSmallest(arr: any[], n: number) {
    arr.sort(function(a: number, b: number) {
        return a - b;
    });
    
    return arr[n - 1];
}

console.log(findNthSmallest([4, 2, 9, 7,1], 1)); 
