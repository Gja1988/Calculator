let firstNumber;
let secondNumber;
let operator;

const display = document.querySelector('.display');
const container = document.querySelector('#container');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const product = document.querySelector('.product');
const division = document.querySelector('.division');
const buttons = document.querySelectorAll('.buttons');

display.addEventListener('input', (event) => {

    const inputValue = event.target.value;
    display.textContent = inputValue;
})

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const buttonValue = event.target.textContent;
        const currentValue = display.textContent;
        display.textContent = currentValue + buttonValue;
    })
});

// one.addEventListener('click', (e) => {

//     display.textContent = '1';
// })

// two.addEventListener('click', (e) => {

//     display.textContent = '2';
// })





// const onClickFirstNum = (num) => firstNumber = num;
// const onClickSecNum = (num) => secondNumber = num;
// const onClickOperator = (o) => operator = o;

// const handleNumberClick = (num) => {

//     if (!operator) {
//         if (firstNumber !== undefined) {
//             firstNumber = firstNumber * 10 + num;
//         } else {
//             firstNumber = num;
//         }
//     } else {
//         if (secondNumber !== undefined) {
//             secondNumber = secondNumber * 10 + num
//         } else {
//             secondNumber = num;
//         }
//     }
// }

const operate = (x, y, op) => {
    let result;

    switch (op) {

        case '+':
            result = add(x, y);
            break;
        case '-':
            result = subtract(x, y);
            break;
        case '*':
            result = multiply(x, y);
            break;
        case '/':
            result = divide(x, y);
            break;
        default:
            return 'Invalid operator'
    }
    return result;
}



// plus.addEventListener('click', () => onClickOperator('+'));
// minus.addEventListener('click', () => onClickOperator('-'));
// product.addEventListener('click', () => onClickOperator('*'));
// division.addEventListener('click', () => onClickOperator('/'));

const add = (firstNumber, secondNumber) => firstNumber + secondNumber;

const subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;

const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;

const divide = (firstNumber, secondNumber) => firstNumber / secondNumber;


console.log(add(2, 2))
console.log(subtract(10, 5))
console.log(multiply(5, 5))
console.log(divide(10, 5))

console.log(operate(5, 5, '-'));