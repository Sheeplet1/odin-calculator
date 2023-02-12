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

function operate() {
    // TODO: Implement operate function 
}

function clear() {
    display.textContent = '';
}

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

let display = document.querySelector(".display");

numberButtons = document.querySelectorAll(".nbtn");
numberButtons.forEach(btn => btn.addEventListener('click', () => updateDisplayNumber(btn)));

operatorButtons = document.querySelectorAll('.obtn');
operatorButtons.forEach(btn => btn.addEventListener('click', () => updateDisplayOperator(btn)));

clearButton = document.querySelector(".cbtn1");
clearButton.addEventListener('click', clear);
