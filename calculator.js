const display = document.querySelector(".input")
const bginput = document.querySelector(".bginput")
const btn = document.querySelectorAll(".btnItem")

let firstOperand = "0";
let operator = null;
let secondOperand = "0";
let resetDisplay = false;

function updateDisplay(value) {
  display.textContent = value.toString();
  input.value = value.toString();
}
// expression : 연산 과정을 문자열로 만들어 화면에 표시하는 역할
function updateBgInput(expression) {
  bginput.textContent = expression; // 연산 과정을 표시
}

function calculate(a, b, op) {
  a = parseFloat(a);
  b = parseFloat(b);
  
  switch (op) {
    case "+": return (a + b).toString();
    case "-": return (a - b).toString();
    case "x": return (a * b).toString();
    case "÷": return b !== 0 ? (a / b).toString() : "Error";
    case "%": return (a % b).toString();
    default: return b.toString();
  }
}

btn.forEach((buttons) => {
  buttons.addEventListener('click', () => {
    const value = buttons.textContent.trim();// 문자열에 공백 제거
    console.log(value);

    if (buttons.classList.contains("number")) {
      if (display.textContent === "0" || resetDisplay) {
        updateDisplay(value);
        resetDisplay = false;
      } else {
        updateDisplay(display.textContent + value);
      }
    } 
    
    else if (buttons.classList.contains("dot")) {
      if (!display.textContent.includes(".")) {
        updateDisplay(display.textContent + ".");
      }
    } 
    
    else if (buttons.classList.contains("function")) {
      if (value === "AC") {
        updateDisplay("0");
        updateBgInput(""); // 연산 과정 초기화
        firstOperand = "0";
        operator = null;
        secondOperand = null;
        resetDisplay = false;
      }
    } 
    
    else if (buttons.classList.contains("operator")) {
      if (firstOperand !== "0" && operator !== null && !resetDisplay) {
        secondOperand = display.textContent;
        firstOperand = calculate(firstOperand, secondOperand, operator);
        updateDisplay(firstOperand);
      } else {
        firstOperand = display.textContent;
      }
      operator = value;
      resetDisplay = true;
      updateBgInput(`${firstOperand} ${operator}`); // 연산 과정을 bginput에 표시
      console.log(`First Operand: ${firstOperand}, Operator: ${operator}`);
    } 
    
    else if (buttons.classList.contains("result")) {
      if (firstOperand !== "0" && operator !== null) {
        secondOperand = display.textContent;
        let result = calculate(firstOperand, secondOperand, operator);
        updateBgInput(`${firstOperand} ${operator} ${secondOperand} = ${result}`);
        updateDisplay("0");
        firstOperand = result;
        operator = null;
        secondOperand = "0";
        resetDisplay = true;
      }
    }
  });
});
