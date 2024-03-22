let operator = '';
let previousValue = '';
let currentValue = '';

function add(a, b){
    return a + b;
} 
console.log(add (3,4));


function subtract(a, b) {
    return a - b;
}
console.log(subtract(8,3));


function multiply (a, b) {
    return a * b;
}
console.log(multiply (5,9));


function divide (a, b) {
    return a / b;
}
console.log(divide(70,5));

function operate (num1, num2) {
    return add()|| subtract() || multiply() || divide();
}

//Store all HTML components in JS
document.addEventListener('DOMContentLoaded', function(){
    let decimal = document.querySelector('.decimal');
    let numbers = document.querySelectorAll('.number');
    let operators = document.querySelectorAll('.operator');
    let clear = document.querySelector('.clear');
    let equal = document.querySelector('.equal');
    let previousScreen = document.querySelector('.previous');
    let currentScreen = document.querySelector('.current');

    //Loop through number buttons
    numbers.forEach((number) => number.addEventListener('click', function(e){
        handleNumber(e.target.textContent);
        currentScreen.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener('click', function(e){
        handleOperator(e.target.textContent);
        previousScreen.textContent = previousValue + '' + operator;
        currentScreen.textContent = currentValue;
    }))
})

function handleNumber (num) {
    if(currentValue.length <= 6 ) {
        currentValue += num;
    }  
}

function handleOperator (op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}  