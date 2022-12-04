
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
    return Number((a/b).toFixed(9));
}

function operate() {
    previousNumber = Number(previousNumber);
    currentNumber = Number(currentNumber);
    previousNumberDiv.textContent = "";
    if (operator === "+") {
        currentNumberDiv.textContent = add(previousNumber,currentNumber);
    } else if (operator === "-") {
        currentNumberDiv.textContent = subtract(previousNumber,currentNumber);
    } else if (operator === "*") {
        currentNumberDiv.textContent = multiply(previousNumber,currentNumber);
    } else if (operator === "/") {
        currentNumberDiv.textContent = divide(previousNumber,currentNumber);
    }
    previousNumber = "";
    currentNumber = currentNumberDiv.textContent;
}

digitBtns.forEach(button => {
button.addEventListener('click', (btn) => {
    if (currentNumber.length <= 12) {
        currentNumber += btn.target.textContent;
        currentNumberDiv.textContent = currentNumber;
    }
    if (button.className === "digit period") {
        if (currentNumber.includes(".")) {
            document.querySelector('.period').disabled = true;
        }
    }
});
});

operatorBtns.forEach(button => {
button.addEventListener('click', (op) => {
    document.querySelector('.period').disabled = false;
    if (currentNumber !== "" && previousNumber !== "") {
        operate();
    }
    operator = op.target.textContent;
    previousNumber = currentNumber;
    previousNumberDiv.textContent = previousNumber + operator;
    currentNumber = "";
    currentNumberDiv.textContent = "";
});
});

equalBtn.addEventListener('click', () => {
    operate();
    if (!currentNumber.includes(".")) {
        document.querySelector('.period').disabled = false;
    }
});

clearBtn.addEventListener('click', clearCalculator);

function clearCalculator() {
    previousNumberDiv.textContent = "";
    currentNumberDiv.textContent = "";
    previousNumber = "";
    currentNumber = "";
    operator = "";
    document.querySelector('.period').disabled = false;
}

deleteBtn.addEventListener('click', deleteDigit);

function deleteDigit() {
    currentNumberDiv.textContent = currentNumberDiv.textContent.slice(0,-1);
    currentNumber = currentNumberDiv.textContent;
}