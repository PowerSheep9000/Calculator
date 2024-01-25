let a = 0;
let intermediateDisplayNumber = 0;
let intermediateResult = 0;
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
    a = 0;
    displayNumbers(displayNumber);
});

let btnOptions = document.querySelector("#placeholder");
btnOptions.addEventListener("click", () => alert("Clear all numbers before next operation!" + 
                                                "\nDecimal button still work in progress!"));

let btnEquals = document.querySelector("#result");
btnEquals.addEventListener("click", () => {
    a = operate(operator, a, displayNumber);
    displayNumbers(a);
    a = 0;
});

let btnAdd = document.querySelector("#add");
btnAdd.addEventListener("click", () => {
    if (a != 0) {
        if (operator != "add") {
            a = operate(operator, a, displayNumber);
        } else {
            a = operate("add", a, displayNumber);
        }
        displayNumbers(a);
        displayNumber = 0;
        operator = "add";
    } else {
        a = displayNumber;
        operator = "add";
        displayNumber = 0;
    }
});

let btnSub = document.querySelector("#subtract");
btnSub.addEventListener("click", () => {
    if (a != 0) {
        if (operator != "subtract") {
            a = operate(operator, a, displayNumber);
        } else {
            a = operate("subtract", a, displayNumber);
        }
        displayNumbers(a);
        displayNumber = 0;
        operator = "subtract";
    } else {
        a = displayNumber;
        operator = "subtract";
        displayNumber = 0;
    }
});

let btnDiv = document.querySelector("#divide");
btnDiv.addEventListener("click", () => {
    if (a != 0) {
        if (operator != "divide") {
            a = operate(operator, a, displayNumber);
        } else {
            a = operate("divide", a, displayNumber);
        }
        displayNumbers(a);
        displayNumber = 0;
        operator = "divide";
    } else {
        a = displayNumber;
        operator = "divide";
        displayNumber = 0;
    }
});

let btnMult = document.querySelector("#multiply");
btnMult.addEventListener("click", () => {
    if (a != 0) {
        if (operator != "multiply") {
            a = operate(operator, a, displayNumber);
        } else {
            a = operate("multiply", a, displayNumber);
        }
        displayNumbers(a);
        displayNumber = 0;
        operator = "multiply";
    } else {
        a = displayNumber;
        operator = "multiply";
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
    if (b == 0) {
        return "Bad kitty!";
    }
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
            return 0;
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