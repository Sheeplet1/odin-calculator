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

function operate(operator, a, b) {
    // TODO: Implement operate function 
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
}


// * CLEAR BUTTON
function clear() {
    display.textContent = '';
}


// * DISPLAY FUNCTIONS
function updateDisplayNumber(e) {
    display.textContent += e.textContent;
}

function updateDisplayOperator(e) {
    if (display.textContent.length != 0) {
        display.textContent += ' ' + e.textContent + ' ';
    } else {
        display.textContent += e.textContent + ' ';
    }
}

function deleteFromDisplay(e) {
    display.textContent = display.textContent
                            .toString()
                            .slice(0, -1);
}

// * MAIN CODE
let display = document.querySelector(".display");

numberButtons = document.querySelectorAll(".nbtn");
numberButtons.forEach(btn => btn.addEventListener('click', () => updateDisplayNumber(btn)));

operatorButtons = document.querySelectorAll('.obtn');
operatorButtons.forEach(btn => btn.addEventListener('click', () => updateDisplayOperator(btn)));

equalButton = document.querySelector('.ebtn');
equalButton.addEventListener('click', () => operate());

clearButton = document.querySelector(".cbtn1");
clearButton.addEventListener('click', clear);

deleteButton = document.querySelector(".cbtn2");
deleteButton.addEventListener('click', deleteFromDisplay);
