function multiply(){
    // console.log(arguments);
    const arg = [...arguments];
    // console.log(arg);
    let result = arg.reduce((total,current)=>{
        return total * current;
    },1)
    return result;
}

console.log(multiply(2,3,4));