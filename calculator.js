let firstNumber;
let secondNumber;
let operator;

const display = document.querySelector('.display');
const container = document.querySelector('#container');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const product = document.querySelector('.product');
const division = document.querySelector('.division');
const buttons = document.querySelectorAll('.buttons');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const deletePrevious = document.querySelector('.delete');

display.addEventListener('input', (event) => {

    const inputValue = event.target.value;
    display.textContent = inputValue;
})

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const buttonValue = event.target.textContent;

        if (!isNaN(buttonValue)) {
            const currentValue = display.textContent;
            display.textContent = currentValue + buttonValue;
        }
    })
});

const onClickFirstNum = (num) => firstNumber = num;
const onClickSecNum = (num) => secondNumber = num;
const onClickOperator = (o) => operator = o;

const handleNumberClick = (num) => {

    if (!operator) {
        if (firstNumber !== undefined) {
            firstNumber = firstNumber * 10 + num;
        } else {
            firstNumber = num;
        }
    } else {
        if (secondNumber !== undefined) {
            secondNumber = secondNumber * 10 + num
        } else {
            secondNumber = num;
        }
    }
}

const calculate = () => {
    if (!firstNumber || !secondNumber || !operator) {
        throw new Error("Something went wrong")
    } else {
        switch (operator) {
            case '+':
                result = firstNumber + secondNumber
                break;
            case '-':
                result = firstNumber - secondNumber
                break;
            case '*':
                result = firstNumber * secondNumber
                break;
            case '/':
                result = firstNumber / secondNumber
                break;
            default:
                return 'Invalid operator'
        }
        display.textContent = result;
        firstNumber = result;
        secondNumber = 0;
        console.log(result);

    }
}

one.addEventListener('click', () => {

    handleNumberClick(1)
});

two.addEventListener('click', () => {

    handleNumberClick(2)
});

three.addEventListener('click', () => {

    handleNumberClick(3)
});

four.addEventListener('click', () => {

    handleNumberClick(4)
});

five.addEventListener('click', () => {

    handleNumberClick(5)
});

six.addEventListener('click', () => {

    handleNumberClick(6)
});

seven.addEventListener('click', () => {

    handleNumberClick(7)
});

eight.addEventListener('click', () => {

    handleNumberClick(8)
});

nine.addEventListener('click', () => {

    handleNumberClick(9)
});

zero.addEventListener('click', () => {

    handleNumberClick(0)
});

equals.addEventListener('click', () => calculate());

plus.addEventListener('click', () => {

    if (!firstNumber || !secondNumber) {
        onClickOperator('+');
        display.textContent = "";
    } else {
        calculate();
        onClickOperator('+');
    }
});

minus.addEventListener('click', () => {

    if (!firstNumber || !secondNumber) {
        onClickOperator('-')
        display.textContent = "";
    } else {
        calculate();
        onClickOperator('-');
    }
});


product.addEventListener('click', () => {

    if (!firstNumber || !secondNumber) {
        onClickOperator('*');
        display.textContent = "";
    } else {
        calculate();
        onClickOperator('*');
    }
});

division.addEventListener('click', () => {

    if (!firstNumber || !secondNumber) {
        onClickOperator('/');
        display.textContent = "";
    } else {
        calculate();
        onClickOperator('/');
    }
});


clear.addEventListener('click', () => {

    display.textContent = "";
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
});


// console.log(add(2, 2))
// console.log(subtract(10, 5))
// console.log(multiply(5, 5))
// console.log(divide(10, 5))

// console.log(operate(5, 5, '-'));

// one.addEventListener('click', (e) => {

//     const number = 1;
//     concatenatedValue += number;
//     display.textContent = concatenatedValue;
// })

// two.addEventListener('click', (e) => {

//     const number = 2;
//     concatenatedValue += number;
//     display.textContent = concatenatedValue;
// })

// plus.addEventListener('click', () => {
//     if (isMath) {
//         isMath = false;

//       const result = parseFloat(concatenatedValue);

//         concatenatedValue = "";
//     } else {
//         const number = parseFloat(concatenatedValue)l
//         const result = number + otherNumber;

// concatenatedValue = "";
//     }
// })

// const operate = (x, y, op) => {
//     let result;

//     switch (op) {

//         case '+':
//             result = add(x, y);
//             break;
//         case '-':
//             result = subtract(x, y);
//             break;
//         case '*':
//             result = multiply(x, y);
//             break;
//         case '/':
//             result = divide(x, y);
//             break;
//         default:
//             return 'Invalid operator'
//     }
//     return result;
// }

// const add = (firstNumber, secondNumber) => firstNumber + secondNumber;

// const subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;

// const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;

// const divide = (firstNumber, secondNumber) => firstNumber / secondNumber;