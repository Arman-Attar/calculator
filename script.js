/* Variables */

let firstNumber = NaN;
let secondNumber = NaN;
let result = 0;
let operator = "";

const equalsButton = document.querySelector("#equals");
const bottomDisplay = document.querySelector(".bottom-display");
const topDisplay = document.querySelector(".top-display");
const decimalButton = document.querySelector(".decimal");
const clearButton = document.querySelector(".clear");
const clearAllButton = document.querySelector(".all-clear");
const additionButton = document.querySelector("#add");
const subtractionButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divisionButton = document.querySelector("#divide");
const operatorButtons = document.querySelectorAll(".operand");
const digitButtons = document.querySelectorAll(
  "button:not(.operand):not(.all-clear):not(.clear)"
);

/* Event listeners */

clearButton.addEventListener("click", () => clear());

clearAllButton.addEventListener("click", () => clearAll());

equalsButton.addEventListener("click", () => equals());

decimalButton.addEventListener("click", () => {
  decimalButton.disabled = true;
  bottomDisplay.innerText += ".";
});

digitButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (bottomDisplay.innerText == "0") {
      bottomDisplay.innerText = button.value;
    } else {
      bottomDisplay.innerText += button.value;
    }
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => operatorPressed(button.value));
});

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "Enter":
      equals();
      break;
    case "*":
      operatorPressed("*");
      break;
    case "/":
      operatorPressed("÷");
      break;
    case "+":
      operatorPressed("+");
      break;
    case "-":
      operatorPressed("-");
      break;
    case "Backspace":
      if (bottomDisplay.innerText != "" && bottomDisplay.innerText != "0") {
        bottomDisplay.innerText = bottomDisplay.innerText.substring(
          0,
          bottomDisplay.innerText.length - 1
        );
      }
    default:
      if (!isNaN(parseFloat(event.key))) {
        if (operator == "") {
          if (bottomDisplay.innerText == "0") {
            bottomDisplay.innerText = "";
          }
          bottomDisplay.innerText += event.key;
        } else {
          bottomDisplay.innerText += event.key;
        }
      }
  }
});

/* Functions */

function clear() {
  bottomDisplay.innerText = "0";
  decimalButton.disabled = false;
}

function clearAll() {
  clear();
  firstNumber = NaN;
  secondNumber = NaN;
  result = 0;
  topDisplay.innerText = "";
  operator = "";
}

function operate(operator, firstNumber, secondNumber) {
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return subtract(firstNumber, secondNumber);
    case "*":
      return multiply(firstNumber, secondNumber);
    case "÷":
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
  return first / second;
}

function operatorPressed(operatorButton) {
  operator = operatorButton;
  if (isNaN(firstNumber)) {
    firstNumber = parseFloat(bottomDisplay.innerText);
  } else {
    secondNumber = parseFloat(bottomDisplay.innerText);
    firstNumber = operate(operator, firstNumber, secondNumber);
    secondNumber = NaN;
  }
  topDisplay.innerText = firstNumber + " " + operator + " ";
  bottomDisplay.innerText = "";
  decimalButton.disabled = false;
}

function equals() {
  secondNumber = parseFloat(bottomDisplay.innerText);
  result = operate(operator, firstNumber, secondNumber);
  topDisplay.innerText += " " + secondNumber + " =";
  bottomDisplay.innerText = result;
  firstNumber = NaN;
  secondNumber = NaN;
}
