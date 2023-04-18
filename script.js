const topDisplay = document.querySelector('.top-display')
const bottomDisplay = document.querySelector('.bottom-display')
const digits = document.querySelectorAll('button:not(.add):not(.subtract):not(.multiply):not(.divide):not(.equal):not(.clear):not(.ac):not(.decimal)')
const clearButton = document.querySelector('.clear')
const allClearButton = document.querySelector('.ac')
const addButton = document.querySelector('.add')
const subtractButton = document.querySelector('.subtract')
const multiplyButton = document.querySelector('.multiply')
const divideButton = document.querySelector('.divide')
const equalsButton = document.querySelector('.equal') 
const decimalButton = document.querySelector('.decimal')

let operator = ''
let firstNumber = NaN;
let secondNumber = NaN;
let result = NaN;

//FUNCTIONS

function operate(oprator, firstNumber, secondNumber) {
    switch (oprator) {
        case '+':
            return firstNumber + secondNumber
        case '-':
            return firstNumber - secondNumber
        case '*':
            return firstNumber * secondNumber
        case '/':
            return firstNumber / secondNumber
    }
}

function add() {
    if (!isNaN(firstNumber)) {
        equals()
    }
    let number;
    isNaN(result) ? number = parseFloat(bottomDisplay.innerHTML) : number = result
    if (isNaN(firstNumber)) {
        firstNumber = number
        topDisplay.innerHTML = firstNumber + ' + '
        bottomDisplay.innerHTML = ''
    } else {
        equals()
        topDisplay.innerHTML = firstNumber + ' + '
        bottomDisplay.innerHTML = ''
    }
    operator = '+'
    decimalButton.disabled = false
}

function subtract() {
    if (!isNaN(firstNumber)) {
        equals()
    }
    let number;
    isNaN(result) ? number = parseFloat(bottomDisplay.innerHTML) : number = result
    if (isNaN(firstNumber)) {
        firstNumber = number
        topDisplay.innerHTML = firstNumber + ' - '
        bottomDisplay.innerHTML = ''
    } else {
        equals()
        topDisplay.innerHTML = firstNumber + ' - '
        bottomDisplay.innerHTML = ''
    }
    operator = '-'
    decimalButton.disabled = false
}

function multiply() {
    if (!isNaN(firstNumber)) {
        equals()
    }
    let number;
    isNaN(result) ? number = parseFloat(bottomDisplay.innerHTML) : number = result
    if (isNaN(firstNumber)) {
        firstNumber = number
        topDisplay.innerHTML = firstNumber + ' * '
        bottomDisplay.innerHTML = ''
    } else {
        equals()
        topDisplay.innerHTML = firstNumber + ' * '
        bottomDisplay.innerHTML = ''
    }
    operator = '*'
    decimalButton.disabled = false
}

function divide() {
    if (!isNaN(firstNumber)) {
        equals()
    }
    let number;
    isNaN(result) ? number = parseFloat(bottomDisplay.innerHTML) : number = result
    if (isNaN(firstNumber)) {
        firstNumber = number
        topDisplay.innerHTML = firstNumber + ' &div; '
        bottomDisplay.innerHTML = ''
    } else {
        equals()
        topDisplay.innerHTML = firstNumber + ' &div; '
        bottomDisplay.innerHTML = ''
    }
    operator = '/'
    decimalButton.disabled = false
}

function equals() {
    secondNumber = parseFloat(bottomDisplay.innerHTML)
    if(!isNaN(firstNumber) && !isNaN(secondNumber)) { 
    topDisplay.innerHTML += secondNumber + ' = '
    result = operate(operator, firstNumber, secondNumber)
    result % 1 == 0 ?  bottomDisplay.innerHTML = result :  bottomDisplay.innerHTML = result.toFixed(8).replace(/0+$/, "");
    firstNumber = undefined
    secondNumber = undefined
}
}

// EVENT LISTENERS

digits.forEach(button => {
    button.addEventListener('click', () => {
        if (operator == '') {
            if (bottomDisplay.innerHTML == '0') {
                bottomDisplay.innerHTML = ''
            }
            bottomDisplay.innerHTML += button.classList.value
        } else {
            bottomDisplay.innerHTML += button.classList.value
        }
    })
});

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'Enter':
            equals()
            break;
        case '*':
            multiply()
            break;
        case '/':
            divide()
            break;
        case '+':
            add()
            break;
        case '-':
            subtract()
            break;     
        case 'Backspace':
            bottomDisplay.innerHTML = bottomDisplay.innerHTML.slice(0, -1);
        default:
            if (!isNaN(parseFloat(event.key))) {
                if (operator == '') {
                    if (bottomDisplay.innerHTML == '0') {
                        bottomDisplay.innerHTML = ''
                    }
                    bottomDisplay.innerHTML += event.key
                } else {
                    bottomDisplay.innerHTML += event.key
                }
            }
    }
})

addButton.addEventListener('click', () => add())

subtractButton.addEventListener('click', () => subtract())

multiplyButton.addEventListener('click', () => multiply())

divideButton.addEventListener('click', () => divide())

equalsButton.addEventListener('click', () => equals())

clearButton.addEventListener('click', () => {
    bottomDisplay.innerHTML = '0'
    decimalButton.disabled = false
})

allClearButton.addEventListener('click', () => {
        firstNumber = undefined
        secondNumber = undefined
        bottomDisplay.innerHTML = '0'
        topDisplay.innerHTML = ''
        operator = ''
        result = NaN;
        decimalButton.disabled = false
})

decimalButton.addEventListener('click', () => {
    bottomDisplay.innerHTML += '.'
    decimalButton.disabled = true
})