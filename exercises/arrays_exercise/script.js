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

