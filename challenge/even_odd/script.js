// const sum = (number) =>{
//     const items = [...(number + '')];
//     console.log(items);
// } 

// sum(56);

const sum = (number) => {
    const items = [...(number + '')];
    const result = items.reduce((total,current) => {
        return total + Number(current)
    }, 0 )
    return result % 2 === 0 ? 'Even' : 'Odd';
}

console.log(sum(56));

// .reduce() Reduce function

let arr = [1,2,3,4];

let result = arr.reduce((total,current) =>{
    return total + current
}, 0)

console.log(result);


// Revision1

function num(number){
    let items = [...(number + '')]; //(string,int,blahblah) to array[0,0,0]
    let result = items.reduce((total,current) => { //.reduce() is a function that takes all items in an array 
        return total + current;     // and  combines them into one single value.
    })
    return result;
}

console.log(num("i love you"));

// Revision2
const add = (number) => {
    let items = [...(number + '')];
    console.log(items);
    for(let i = 0; i < 3; i++){
        console.log(items[i]);
    };
}

(add(354));

// Revision3
const dance = [2,4];
const you = dance.reduce((total,current)=>{
    if(total % 2 === 0){
        return total + current;
    }
    else{
        return "it is odd so we can't calculate cuz we only calculate even number only";
    }
})

console.log(`Even Calculator : ${you}`);

// Revision4
const golden = (number) => {
    const items = [...(number + '')];
    const you = items.reduce((total,current)=>{
        if(Number(current) % 2 === 0){
            return total + Number(current);
        }
        return total;
    } , 0)

    return you
}

console.log(`Even Cal : ${golden(123456)}`);

// Return 3 Times

function twice(num1,num2){
    return function nana(num3,num4){
        return function mama(num5,num6){
            let result = num1 * num3 * num5 + num2 * num4 * num6
            return result;
        }
    }
}

console.log(twice(1,2)(1,2)(2,3))

// argument is not variable , it's function!!

function fairy(off,shampoo,txt){
    let result = txt(off,shampoo);
    console.log(result);
}

fairy(3,4,function(x,y){
    return x + y
})