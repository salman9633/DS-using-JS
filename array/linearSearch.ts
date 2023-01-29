function linearSearch(arr: string | any[], target: any) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}


console.log(

    linearSearch(
        [2,3,6,7,8,5,0],5
        )
);

