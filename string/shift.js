str="hello"

// console.log(str.slice(2));

let n=7

for (let index = 0; index < n; index++) {
    const firstChar=str.slice(0,1)
    str=str.slice(1)+firstChar
}

console.log(str);

