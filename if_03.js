// 두 숫자와 연산자를 입력으로 받아 계산하는 간단한 계산기 함수
function miniCalculator(num1, num2, operator) {
    if(operator === '+'){
        return num1 + num2;
    } else if (operator === '-'){
        return num1 - num2;
    } else if (operator === '/'){
        return num1 / num2;
    } else if (operator === '*'){
        return num1 * num2;
    }
  }
let output = miniCalculator(4, 2, '*');
console.log(output);
  