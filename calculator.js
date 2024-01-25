let a = 0;
let b = 0;
let operator;
let displayNumber = 0;

let btn1 = document.querySelector("#one");
btn1.addEventListener("click", () => displayNumbers(calculateDisplayNumber(1)));
let btn2 = document.querySelector("#two");
btn2.addEventListener("click", () => displayNumbers(calculateDisplayNumber(2)));
let btn3 = document.querySelector("#three");
btn3.addEventListener("click", () => displayNumbers(calculateDisplayNumber(3)));
let btn4 = document.querySelector("#four");
btn4.addEventListener("click", () => displayNumbers(calculateDisplayNumber(4)));
let btn5 = document.querySelector("#five");
btn5.addEventListener("click", () => displayNumbers(calculateDisplayNumber(5)));
let btn6 = document.querySelector("#six");
btn6.addEventListener("click", () => displayNumbers(calculateDisplayNumber(6)));
let btn7 = document.querySelector("#seven");
btn7.addEventListener("click", () => displayNumbers(calculateDisplayNumber(7)));
let btn8 = document.querySelector("#eight");
btn8.addEventListener("click", () => displayNumbers(calculateDisplayNumber(8)));
let btn9 = document.querySelector("#nine");
btn9.addEventListener("click", () => displayNumbers(calculateDisplayNumber(9)));
let btn0 = document.querySelector("#zero");
btn0.addEventListener("click", () => displayNumbers(calculateDisplayNumber(0)));
let btnClear= document.querySelector("#clear");
btnClear.addEventListener("click", () => {
    displayNumber = 0;
    displayNumbers(displayNumber);
});

let btnEquals = document.querySelector("#result");
btnEquals.addEventListener("click", () => {
    switch(operator) {
        case "add":
            displayNumbers(add(a, displayNumber));
            break;
        default:
            return "Error";
    }
    a = 0;
});

let btnAdd = document.querySelector("#add");
btnAdd.addEventListener("click", () => {
    if (a != 0) {
        a += displayNumber;
        displayNumber = 0;
        operator = "add";
    } else {
        a = displayNumber;
        operator = "add";
        displayNumber = 0;
    }
});

displayNumbers(displayNumber);

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return (a / b).toFixed(2);
}

function operate(operator, a, b) {
    switch(operator) {
        case "add":
            return add(a, b);
        case "subtract":
            return subtract(a, b);
        case "multiply":
            return multiply(a, b);
        case "divide":
            return divide(a, b);
        default:
            return "Error: not a functional operation!";
    }
}

function displayNumbers(numberToDisplay) {
    let display = document.querySelector(".display");
    display.textContent = numberToDisplay;
}

function calculateDisplayNumber(number) {
    let toReturn = displayNumber + number.toString();
    displayNumber = parseInt(toReturn);
    return toReturn;
}