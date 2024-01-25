let a;
let b;
let operator;

let btn1 = document.querySelector("#one");
btn1.addEventListener("click", () => displayNumbers(1));
let btn2 = document.querySelector("#two");
btn2.addEventListener("click", () => displayNumbers(2));
let btn3 = document.querySelector("#three");
btn3.addEventListener("click", () => displayNumbers(3));
let btn4 = document.querySelector("#four");
btn4.addEventListener("click", () => displayNumbers(4));
let btn5 = document.querySelector("#five");
btn5.addEventListener("click", () => displayNumbers(5));
let btn6 = document.querySelector("#six");
btn6.addEventListener("click", () => displayNumbers(6));
let btn7 = document.querySelector("#seven");
btn7.addEventListener("click", () => displayNumbers(7));
let btn8 = document.querySelector("#eight");
btn8.addEventListener("click", () => displayNumbers(8));
let btn9 = document.querySelector("#nine");
btn9.addEventListener("click", () => displayNumbers(9));
let btn0 = document.querySelector("#zero");
btn0.addEventListener("click", () => displayNumbers(0));
let btnClear= document.querySelector("#clear");
btnClear.addEventListener("click", () => displayNumbers(0));

displayNumbers(0);

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