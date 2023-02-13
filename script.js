// * ARITHMETIC FUNCTIONS
function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
    return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
    return parseInt(a) * parseInt(b);
}

function division(a, b) {
    return parseInt(a) / parseInt(b);
}

function setOperation(operator) {
    // TODO
    if (currOperation !== null) evaluate();
    
    // when user enters an operator:
    //  on the second part of display, have the current operation 
    //  and clear main screen
    firstOperand = mainDisplay.textContent;
    currOperation = operator;
    secondDisplay.textContent = `${firstOperand} ${currOperation}`
    mainDisplay.textContent = '';
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case 'x': return multiply(a, b);
        case '/':
            if (b === 0) return null;
            else return division(a, b);
        default: return null;
    }
}

function evaluate() {
    // TODO: Implement evaluate function => will use the operate function
    if (currOperation == null) return;
    if (currOperation === '/' && mainDisplay.textContent === '0') {
        alert("Cannot divide by 0");
        return;
    }
    secondOperand = mainDisplay.textContent;
    mainDisplay.textContent = operate(currOperation, firstOperand, secondOperand);
    secondDisplay.textContent = `${firstOperand} ${currOperation} ${secondOperand} =`
    currOperation = null;
}

// * CLEAR BUTTON
function clear() {
    mainDisplay.textContent = '';
    secondDisplay.textContent = '';
    firstOperand = '';
    secondOperand = '';
    currOperation = null;
}


// * mainDisplay FUNCTIONS
function updatemainDisplay(e) {
    mainDisplay.textContent += e.textContent;
}

function deleteFrommainDisplay(e) {
    mainDisplay.textContent = mainDisplay.textContent
                            .toString()
                            .slice(0, -1);
}

// * MAIN CODE
let firstOperand = '';
let secondOperand = '';
let currOperation = null;
let mainDisplay = document.querySelector(".main-display");
let secondDisplay = document.querySelector(".secondary-display");

const numberButtons = document.querySelectorAll(".nbtn");
numberButtons.forEach(btn => btn.addEventListener('click', () => updatemainDisplay(btn)));

const operatorButtons = document.querySelectorAll('.obtn');
operatorButtons.forEach(btn => btn.addEventListener('click', () => setOperation(btn.textContent)));

const equalButton = document.querySelector('.ebtn');
equalButton.addEventListener('click', () => evaluate());

const clearButton = document.querySelector(".cbtn1");
clearButton.addEventListener('click', clear);

const deleteButton = document.querySelector(".cbtn2");
deleteButton.addEventListener('click', deleteFrommainDisplay);