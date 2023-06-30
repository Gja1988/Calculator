let firstNumber;
let secondNumber;
let operator;

const onClickFirstNum = (num) => firstNumber = num;
const onClickSecNum = (num) => secondNumber = num;
const onClickOperator = (o) => operator = o;
// const handleNumberClick = (num) => {}

const operate = (x, y, op) => {
    if (op === '+') {
        return add(x, y)
    } else if (op === '-') {
        return subtract(x, y)
    } else if (op === '*') {
        return multiply(x, y)
    } else if (op === '/') {
        return divide(x, y);
    }
}



additionElement = addEventListener('click', () => onClickOperator('+'));
subtractionElement = addEventListener('click', () => onClickOperator('-'));
multiplicationElement = addEventListener('click', () => onClickOperator('*'));
divisionElement = addEventListener('click', () => onClickOperator('/'));



const add = (firstNumber, secondNumber) => firstNumber + secondNumber;

const subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;

const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;

const divide = (firstNumber, secondNumber) => firstNumber / secondNumber;


console.log(add(2, 2))
console.log(subtract(10, 5))
console.log(multiply(5, 5))
console.log(divide(10, 5))