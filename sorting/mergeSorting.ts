function mergeSort(arr:number[]):number[]{
    if(arr.length<2){
        return arr
    }
    let middle:number=Math.floor(arr.length/2)
    let leftArr:number[]=arr.slice(0,middle)
    let rightArr:number[]=arr.slice(middle)

    console.log("left [",leftArr,"]");
    console.log("right [",rightArr,"]");
    

    return merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(left:number[],right:number[]){
    let sortedArr:number[]=[]

    while(left.length && right.length){
        if(left[0]<=right[0]){
            sortedArr.push(left.shift()!)
        }else{
            sortedArr.push(right.shift()!)
        }
    }

    console.log('.........',left);
    console.log('+++++++++',right);
    console.log('sorted',sortedArr);
    
    return [...sortedArr,...left,...right]
}

console.log(mergeSort([90,6,3,-6,4,2,0]));
