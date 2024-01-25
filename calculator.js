let a;
let b;
let operator;

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
    return a / b;
}

function operate(operator, a, b) {
    switch(operator) {
        case "add":
            return add(a, b);
        case "subtract":
            return subtract(a, b);
        case "multiply":
            multiply(a, b);
            break;
        case "divide":
            divide(a, b);
            break;
        default:
            return "Error: not a functional operation!";
    }
}

console.log(operate("subtract", 5, 7));