var num1 = 2;
var num2 = 1;
var num3 = num1 + num2;
console.log(num3);

let num4 , num5 = 3;
console.log(num5);
// console.log(num4) undefinded cuz num4 didn't defined , num5 only defined with 3

let myvar;
console.log(typeof(myvar));

myvar = 123;
console.log("123 of data type is " + typeof(myvar));

myvar = "ABC";
console.log("ABC of data type is " + typeof(myvar));

myvar = true;
console.log("TRUE of data type is " + typeof(myvar));

// Double Quote , Single Quote (Case Sentitive)
console.log("The Tree is 7\" long.");
console.log('It is 3 o\' colck.');

// Template String
let name = "Nyein";
let age = 23;
let greet = `Hello ${name}. You are ${age} years old so you can drink!`;
console.log(greet);

// NaN
let number1;
let number2 = 2;

console.log(number1 + number2); // the output is NaN cuz undefined(number1) + number = NaN

// Function
function add(a,b){
    return a + b;
}

function circle(r){
    const PI = 3.14;
    return PI * r * r;
}

function greet1(){
    console.log("Hello , World");
}

console.log(add(1,2));
console.log(circle(3));
greet1();

let name1 = function(a,b){
    return a+b;
}

console.log(name1(2,3));

(function(){
    console.log("Hello , World");
}) ()

// Callback Function 1

function twice(num,fun){
    let result = fun(num);
    return result * 2;
}

console.log(twice(5,function(x){return x+1}));

// Callback Function 2

function three(num,fun){
    let result = fun(num);
    return result / 2;
}

console.log(three(5,function(x){
    return x * 2;
})
);
