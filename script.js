let previousNumber = "",
    currentNumber = "",
    operator = "";

const resultDiv = document.querySelector('.result');
const currentNumberDiv = document.querySelector('.currentNumber');
const previousNumberDiv = document.querySelector('.previousNumber');
const digitBtns = document.querySelectorAll('.digit');
const operatorBtns = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');
const equalBtn = document.querySelector('.equal');

function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return (a/b).toFixed(9);
}

function operate(operator, firstNumber, secondNumber) {
    if (operator === "+") {
        return add(firstNumber,secondNumber);
    } else if (operator === "-") {
        return subtract(firstNumber,secondNumber);
    } else if (operator === "*") {
        return multiply(firstNumber,secondNumber);
    } else if (operator === "/") {
        return divide(firstNumber,secondNumber);
    }
}

digitBtns.forEach(button => {
    button.addEventListener('click', (btn) => {
        if (currentNumber.length <= 12) {
            currentNumber += btn.target.textContent;
            currentNumberDiv.textContent = currentNumber;
        }
    });
});

operatorBtns.forEach(button => {
    button.addEventListener('click', (op) => {
        operator = op.target.textContent;
        previousNumber = currentNumber;
        previousNumberDiv.textContent = previousNumber + operator;
        currentNumber = "";
        currentNumberDiv.textContent = "";
    });
});

