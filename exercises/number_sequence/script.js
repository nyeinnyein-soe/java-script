const first = [8,6,8,6,7,4,7];
const second = [4,5,5,7,5,5,9];

const count = (data) =>{
    return data.reduce((total,current,index) => {
        // console.log(current);
        // console.log(index);
        // console.log(current === data[index + 2])
        // console.log(current != data[index + 1])
        const match = (current === data[index + 2]) && (current != data[index + 1]);
        if(match) return total + 1
        return total;
    },0)
}

console.log(count(second));

const arr1 = [4,5,4,5,4,5];

const count1 = (data) => {
    return data.reduce((total , current , index)=>{
        const match = current === data[index + 2] && current != data[index + 1]
        if(match) return total + 1;
        return total;
    },0)
}

console.log(count1(arr1));

// Revision

const twice = (num1,num2) =>{
    const result = num2(num1);
    return result;
}

console.log(twice(3,function(x){
    return x + x;
})
);

const threeReturn = (a,b) => {
    return(function(c,d){
        return(function(e,f){
            return (a * c * e) + (b * d * f);
        })
    })
}

console.log(threeReturn(1,2)(3,4)(5,6));

const even_odd = (data) => {
    const arr_evenodd = [...(data + '')];
    // console.log(arr_evenodd);
    return arr_evenodd.reduce((total , current) =>{
        const result = total + current;
        const x = (result % 2 === 0)? "EVEN" :"Odd";
        return x;
    },0)
}

console.log(even_odd(56));

const thrid = [4,7,4,5,6,5]

const nice = (data) =>{
    const result = data.reduce((total , current , index) => {
        const match = (current === data[index + 2]) && (current != data[index + 1]);
        return (match)?
        // if(match){
        //     return total += 1
        // }
        // return total;
    },0)
    return result;
}

console.log(nice(thrid));