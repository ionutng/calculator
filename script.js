let operand = null;

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

function populateDisplay() {
    const digitBtns = document.querySelectorAll('.digit');
    const resultDiv = document.querySelector('.result');
    const resultPara = document.createElement('p');
    digitBtns.forEach(button => {
        button.addEventListener('click', () => {
            resultPara.textContent = button.value;
            operand = resultPara.textContent;
        });
    });
    resultDiv.appendChild(resultPara);
}

populateDisplay();


