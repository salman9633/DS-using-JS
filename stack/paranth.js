function parathCheck(paranth){
    // let paranth=data.split('')
    console.log(paranth);
    stack=[]

    for (let i = 0; i < paranth.length; i++) {
        x=paranth[i]
        if(x=='{'||x=='('||x=='['){
          stack.push(paranth[i])  
        }else if(x=='}'||x==')'||x==']'){
            if(x=='}' && stack[stack.length-1]=='{'){
                stack.pop()
            }else if(x==')' && stack[stack.length-1]=='('){
                stack.pop()
            }else if(x==']' && stack[stack.length-1]=='['){
                stack.pop()
            }
        }
        
    }
    console.log(stack);
    if(stack.length===0){
        console.log("Perfect");
    }else{
        console.log("not perfect")
    }
}

parathCheck('{}{}{(}')
