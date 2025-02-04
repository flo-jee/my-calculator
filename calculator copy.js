const display = document.querySelector(".displayinput"); // 변경된 부분
const bginput = document.querySelector(".bginput"); // 연산 과정 표시
const btn = document.querySelectorAll(".btnItem");

let firstOperand = "0";
let operator = null;
let secondOperand = "0";
let resetDisplay = false;

// 숫자를 3자리마다 콤마(,)를 추가하여 반환하는 함수
function formatNumber(value) {
  return parseFloat(value).toLocaleString("en-US");
}

// 디스플레이 업데이트 시 자동으로 포맷 적용
function updateDisplay(value) {
  display.textContent = formatNumber(value.toString()); 
}

// 연산 과정 표시 업데이트 (콤마 없이 그대로 표시)
function updateBgInput(expression) {
  bginput.textContent = expression; 
}

// 계산 함수 (숫자 연산)
function calculate(a, b, op) {
  a = parseFloat(a.replace(/,/g, "")); // 콤마 제거 후 변환
  b = parseFloat(b.replace(/,/g, "")); // 콤마 제거 후 변환

  if (isNaN(a) || isNaN(b)) return "0";

  switch (op) {
    case "+": return (a + b).toString();
    case "-": return (a - b).toString();
    case "x": return (a * b).toString();
    case "÷": return b !== 0 ? (a / b).toString() : "Error";
    case "%": return (a % b).toString();
    default: return b.toString();
  }
}

btn.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.textContent.trim(); // 문자열에 공백 제거
    // console.log(value);

    if (button.classList.contains("number")) {
      if (display.textContent === "0" || resetDisplay) {
        updateDisplay(value);
        resetDisplay = false;
      } else {
        updateDisplay(display.textContent.replace(/,/g, "") + value);
      }
    } 
    
    else if (button.classList.contains("dot")) {
      if (!display.textContent.includes(".")) {
        updateDisplay(display.textContent.replace(/,/g, "") + value);
    
      } 
    }
    else if (button.classList.contains("function")) {

      if (value === "AC") {
        updateDisplay("0");
        updateBgInput(""); 
        firstOperand = "";
        operator = null;
        secondOperand = "";
        resetDisplay = false;
      } 
      else if (value === "+/-") {
        updateDisplay((parseFloat(display.textContent.replace(/,/g, "") + value) * -1).toString());
      } 
      else if (value === "%") {
        updateDisplay((parseFloat(display.textContent.replace(/,/g, "") + value) / 100).toString());
      }
    }

    else if (button.classList.contains("operator")) {
      if (firstOperand !== "0" && operator !== null && !resetDisplay) {
        secondOperand = display.textContent.replace(/,/g, "");
        firstOperand = calculate(firstOperand, secondOperand, operator);
        updateDisplay(firstOperand);
      } else {
        firstOperand = display.textContent.replace(/,/g, "");
      }
      operator = value;
      resetDisplay = true;
      updateBgInput(`${firstOperand} ${operator}`); // 연산 과정을 bginput에 표시
      // console.log(`First Operand: ${firstOperand}, Operator: ${operator}`);
    } 
    
    else if (button.classList.contains("result")) {
      if (firstOperand !== "0" && operator !== null) {
        secondOperand = display.textContent.replace(/,/g, "");
        let result = calculate(firstOperand, secondOperand, operator);
        updateBgInput(`${firstOperand} ${operator} ${secondOperand} = ${result}`);
        updateDisplay(result); // 새로운 입력을 위해 초기화
        firstOperand = result;
        operator = null;
        secondOperand = "";
        resetDisplay = true;
        // console.log(result)
      }
    }
  });
});
