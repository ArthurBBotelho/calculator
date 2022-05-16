//Declaration of number 1 and number 2, created the variables and linked them to the hmtl num1 and num2//

let num1
let num2

function getNumbers() {
    num1 = parseInt(document.getElementById("num1-el").value)
    num2 = parseInt(document.getElementById("num2-el").value) 
}

let sum = document.getElementById("sum-el")

let operation

function add() {
    getNumbers()
    operation = num1 + num2;
    sum.textContent += operation + " | ";
}

function subtract() {
    getNumbers()
    operation = num1 - num2;
    sum.textContent += operation + " | ";
}

function divide() {
    getNumbers()
    operation = num1 / num2;
    sum.textContent += operation + " | ";  
}

function multiply() {
    getNumbers()
    operation = num1 * num2;
    sum.textContent += operation + " | ";
}