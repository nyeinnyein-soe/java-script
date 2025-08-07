// 🔹 Exercise 1: Push & Pop Basics
// You have an array of fruits:

// js
// Copy
// Edit
// let fruits = ["apple", "banana"];
// Your Task:

// Add "mango" to the end.

// Remove the first fruit.

// Add "orange" to the front.

// What does the final array look like?"

let fruits = ["apple", "banana"];
console.log(fruits.push("mango"));
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("orange");
console.log(fruits);


// 🔹 Exercise 2: Count Even Numbers
// You have this array:

// js
// Copy
// Edit
// let numbers = [3, 6, 9, 12, 15, 18, 21];
// Your Task:
// 👉 Write code that counts how many even numbers are in the array.

let numbers = [3, 6, 9, 12, 15, 18, 21];

let count = (data) => {
    let r = data.reduce((total, current) => {
        if (current % 2 === 0) {
            return total + 1;
        }
        return total;
    }, 0)
    return r;
}

console.log("Exercise 2 : " + count(numbers));

let count1 = 0;
let con = (data) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i] % 2 === 0) {
            count1++;
            // count1 = count1 + 1;
        }
        // count1;
    }
    return count1;
}

console.log(con(numbers));
console.log("--------------------")

// 🔹 Exercise 3 (repeat):
// js
// Copy
// Edit
// let words = ["cat", "house", "sun", "elephant", "pen", "notebook"];
// Task:
// Make a new array that only includes the words longer than 4 letters.

// 💡 Try using .filter() — but if you want to use a loop, that’s okay too.

let words = ["country", "cat", "house", "sun", "elephant", "pen", "notebook"];

const moon = (data) =>{
    let item = [...(data + "")];
    let arr1 = []
    // console.log(item);
    if(item.length > 3){
        // console.log(item);
        return arr1.push(item);
    }
}

const check = words.filter(moon);

console.log("Result : [" + check + "]");

// Another Way (Filter function)

let word = ["country", "cat", "house", "sun", "elephant", "pen", "notebook"]

const longerthan4 = (data) =>{
    return data.length > 3 ;
}

const result1 = word.filter(longerthan4);
console.log(result1);

// 🔹 Exercise 4: Filter Words Starting with “c”
// js
// Copy
// Edit
// let words = ["country", "cat", "house", "sun", "elephant", "pen", "notebook", "camera"];
// Your Task:
// 👉 Create a new array that includes only the words that start with the letter "c".

let words1 = ["country", "cat", "house", "sun", "elephant", "pen", "notebook", "camera"];

const aespa = (word) =>{
    // return word[0] === "c"
    return word.startsWith("c")
}
const res = words1.filter(aespa);
console.log(res)

// const res = words1.filter(word => word.startsWith("c"));
// console.log(res)

let number = [1,2,3,4,5,6,7];

let evenodd = (number) =>{
    let arr = [];
    if(number % 2 === 0){
        return arr.push(number);
    }
}

let r = number.filter(evenodd);
console.log("Even Number : [" + r + "]")

// Your Task:
// Use .map() to return a new array where each number is squared.

// Expected result:

// js
// Copy
// Edit
// [4, 16, 36, 64]

let close = [2,4,6,8];

let square = close.map((n)=>{
    let result = n * n;
    return result;
})

console.log("[" + square + "]");


// 🔹 Exercise 7: Add "!" to every word
// js
// Copy
// Edit
// let words = ["hello", "world", "javascript", "map"];
// Your Task:
// Use .map() to create a new array like this:

// js
// Copy
// Edit
// ["hello!", "world!", "javascript!", "map!"]

let unforgettable = ["hello", "world", "javascript", "map"];

let winplish = unforgettable.map((n)=>{
    return n + "!";
})

console.log(winplish)

// 🔹 Exercise 8: Convert Numbers to Strings
// js
// Copy
// Edit
// let nums = [1, 2, 3, 4, 5];
// Your Task:
// Use .map() to return a new array where each number is converted to a string.

let nums = [1, 2, 3, 4, 5];
// console.log(nums)

let convert = nums.map((n)=>{
    return n.toString();
})

console.log(convert);