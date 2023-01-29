function reverseString(str) {
    return str.split("").map(function(char, i, arr){
        console.log(char,'c');
        console.log(i,'i');
        console.log(arr,'arr');
        return arr[arr.length - i - 1];
    }).join("");
}


function rev(str) {
    return str.split('').reverse().join('')
}

console.log(rev('aabbcc'));


// console.log(reverseString("hello"));

//paliandrome

function palian(str) {

    return str==str.split('').reverse().join('')

    
}

console.log(palian('aaaab'));

function paliandrome(str){
    len=str.length-1
    let flag=true
    console.log(len);
    for(let i=0;i<str.length/2;i++){
        console.log('l');
        if(str[i]!=str[len]){
            flag=false
            break
        }
        len--

    }

    if (flag) {
        console.log("palian");
    } else {
        
        console.log("NOT palian");
    }

}

paliandrome("mlml")


