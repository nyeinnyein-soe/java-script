// const screenDisplay = document.querySelector('.screen');
// const buttons = document.querySelectorAll('button')
// console.log(screenDisplay)
// console.log(buttons)

// function calculate(button){
//     console.log("clicked" , button)
// }

// buttons.forEach(button => button.addEventListener('click', () => calculate(button)))

const screenDisplay = document.querySelector('.screen')
console.log(screenDisplay)

const buttons = document.querySelectorAll('button')
// console.log(buttons)

let calculation = [];
let accmulativeCal;

const calculate = (button) => {
    // console.log("clicked",button.textContent)
    let value = button.textContent;
    // console.log(value)
    if (value === "CLEAR") {
        calculation = [];
        screenDisplay.textContent = '.';
    } else if (value === "=") {
        console.log(accmulativeCal)
        screenDisplay.textContent = eval(accmulativeCal)
    }
    else {
        calculation.push(value);
        // console.log(calculation);
        accmulativeCal = calculation.join('');
        screenDisplay.textContent = accmulativeCal;
    }
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))