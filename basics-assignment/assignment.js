
const currentResultOutput = document.getElementById('current-result');


function outputResult(result, text) {
    currentResultOutput.textContent = result;
  }

const userInput = 30;
let value;

value = 18 + userInput;

value = value - 3;
value = value * value;
value = value / 2;

outputResult(value)

alert(userInput);
alert(value);