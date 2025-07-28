function example(a,b){
    return function(c,d){
        return function(e,f){
            console.log(a,b,c,d,e,f);
            return a * c * e + b * d * f;
        }
    }
}

console.log(`The First Answer is ${example(1,2)(3,4)(5,6)}`);
console.log(`The Second Answer is ${example(1,2)(1,2)(3,4)}`);

function ex(a,b){
    return function(c,d){
        return function(e,f){
            console.log(a,b);
            return c * d + e * f;
        }
    }
}

console.log(`The answer of ex is ${ex(1,2)(3,4)(4,6)}`);

// Return 3 times in arrow function

const dell = (a,b) => (c,d) => (e,f) => a * c * e + b * d * f;

console.log(`The First Answer is ${dell(1,2)(3,4)(5,6)}`);
console.log(`The Second Answer is ${dell(1,2)(1,2)(3,4)}`);


// Callback Functioon
console.log(ex(1,2)(3,4)(5,6))

function insta(num1,num2){
    let result = num2(num1);
    console.log(`The result is ${result}`);
}

insta(3,function(x){return 2 * x;});

function nice(a,b){
    return b(a);
}

console.log(`Nice is ${nice(2,function(x){return 3 + x})}`);