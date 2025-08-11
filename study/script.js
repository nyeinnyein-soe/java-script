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

let bird = {
    color: "Green", 
    leg: 2
};

bird.name = "Shwe Gal"
console.log(bird)
console.log(bird.name)

bird.color = "Blue"
console.log(bird)

// Array of Objects (Example)

let user = [
    {name : "Sabrina Carpenter", age : 26},
    {name : "Olivia Rodrigo", age : 22}
]

console.log(user[0].name)
console.log(user[0].age)

// Mini activity
// Can you make an array named books with 3 objects,
// each having title and author properties?
// After that, try printing the title of the second book.

let books = [
    {title : "Absalom, Absalom!", author : "William Faulkner"},
    {title : "An Acceptable Time", author : "Madeleine L'Engle"},
    {title : "Alien Corn (play)", author : "Sidney Howard"}
]

console.log(`The Title of the second book is "${books[1].title}"`)

//Looping through an array of objects

for(let book of books){
    console.log(`${book.title} - by ${book.author}`)
}

// Goal:
// We want to print something like:

// less
// Copy
// Edit
// Book #1: Absalom, Absalom!
// Book #2: An Acceptable Time
// Book #3: Alien Corn (play)

let smile = (data) =>{
    let nai = data.reduce((total,current,index)=>{
        // console.log(index + 1)
        // console.log(current.title)
        console.log(`Book #${index + 1}: ${current.title}`)
    },0)
    return nai;
}

console.log(smile(books))