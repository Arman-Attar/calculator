let firstNumber = NaN;
let secondNumber = NaN;
let result = 0
let operator = ""
const digitButtons = document.querySelectorAll(
  "button:not(.operand):not(.all-clear):not(.clear)"
);
const equalsButton = document.querySelector('#equals') 
const bottomDisplay = document.querySelector(".bottom-display")
const topDisplay = document.querySelector(".top-display")
const decimalButton= document.querySelector('.decimal')
const clearButton = document.querySelector('.clear')
const clearAllButton = document.querySelector('.all-clear')

clearButton.addEventListener('click', () => clear())
clearAllButton.addEventListener('click', () => clearAll())

equalsButton.addEventListener('click', () => {
    secondNumber = parseFloat(bottomDisplay.innerText)
    result = operate(operator, firstNumber, secondNumber)
    topDisplay.innerText += secondNumber + " ="
    bottomDisplay.innerText = result
    firstNumber = NaN
    secondNumber = NaN
})

decimalButton.addEventListener('click', () => decimalButton.disabled = true)

function clear() {
    bottomDisplay.innerText = "0"
    decimalButton.disabled = false
}

function clearAll() {
    clear()
    firstNumber = NaN
    secondNumber = NaN
    result = 0
    topDisplay.innerText = ''
    operator = ''
}

digitButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (bottomDisplay.innerText == "0") {
      bottomDisplay.innerText = button.value;
    } else {
      bottomDisplay.innerText += button.value;
    }
  });
});

function operate(operator, firstNumber, secondNumber) {
  switch (operate) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return subtract(firstNumber, secondNumber);
    case "*":
      return multiply(firstNumber, secondNumber);
    case "/":
      return divide(firstNumber, secondNumber);
  }
}

function add(first, second) {
  return first + second;
}

function subtract(first, second) {
  return first - second;
}

function multiply(first, second) {
  return first * second;
}

function divide(first, second) {
  return first / 2;
}
