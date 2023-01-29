function fact(n:number):number {

    if(n==0){
        return 1
    }else{
        return n*fact(n-1)
    }
    
}

console.log(fact(10));

function fib(n:number):number {
    if(n<=2){
        return 1
    }
    
    return fib(n-1)+fib(n-2)
    
    
}

// console.log(fib(0));
// console.log(fib(1));
console.log(fib(10));

