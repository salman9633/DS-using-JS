function count(str) {

    let toArr=Array.from(str)
   
// console.log('llll');
    let arr=toArr.reduce((acc,cur)=>{
        if(acc[cur]){
            acc[cur] = ++acc[cur];
        }else{
            acc[cur]=1
        }
        return acc
    },{})
    console.log(arr);
    
}

count('aassar')