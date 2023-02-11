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

}

function clear() {
    display.textContent = '';
}

function updateDisplay(e) {
    display.textContent += e.textContent;
}

let display = document.querySelector(".display");

operatorButtons = document.querySelectorAll(".btn");
operatorButtons.forEach(btn => btn.addEventListener('click', () => updateDisplay(btn)));

clearButton = document.querySelector(".cbtn1");
clearButton.addEventListener('click', clear);
