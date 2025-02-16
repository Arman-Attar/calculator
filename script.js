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


equalsButton.addEventListener('click', () => {
    result = operate(operator, firstNumber, secondNumber)
    topDisplay.innerText += secondNumber + " ="
    bottomDisplay.innerText = result
})

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
