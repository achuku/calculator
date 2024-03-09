var num1, operator, num2;

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

const btn1 = document.getElementById('one');
btn1.addEventListener('click', () => {
    num1 = 1;
    console.log('User selected:', num1);
    btn1.innerHTML = num1;
});
