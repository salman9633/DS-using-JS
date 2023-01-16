function change(value,key) {
    let newKey=key%26
    console.log(newKey);
    let charArray=""


    for (let i = 0; i < value.length; i++) {
        let letterPosition = value.charCodeAt(i) + newKey
        if (letterPosition <= 122) {
            charArray += String.fromCharCode(letterPosition)
        } else {
            charArray += String.fromCharCode(96 + letterPosition % 122)
        }
    }

    console.log(charArray); 
}

const str="azc"
change(str,5)