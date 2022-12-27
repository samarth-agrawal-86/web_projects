const defaultResult = 0;
let currentResult = defaultResult;
let calculationDescription = 'Default';
let logEntries = [];

function getUserNumberInput() {
  return userInput.value;
}

function createLog(operation, prevResult, enteredNumber, currentResult) {
  const logEntry = {
    operation: operation,
    prevResult: prevResult,
    number: enteredNumber,
    result: currentResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function createOutputDescription(operator, prevResult, enteredNumber) {
  const calcDesc = `${prevResult} ${operator} ${enteredNumber}`;
  outputResult(currentResult, calcDesc);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const prevResult = currentResult;
  currentResult = prevResult + enteredNumber; //currentResult += enteredNumber;

  createOutputDescription('+', prevResult, enteredNumber);
  createLog('ADD', prevResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const prevResult = currentResult;
  currentResult = prevResult - enteredNumber;

  createOutputDescription('-', prevResult, enteredNumber);
  createLog('SUBTRACT', prevResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const prevResult = currentResult;
  currentResult = prevResult * enteredNumber;

  createOutputDescription('*', prevResult, enteredNumber);
  createLog('MULTIPLY', prevResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const prevResult = currentResult;
  currentResult = prevResult / enteredNumber;

  createOutputDescription('/', prevResult, enteredNumber);
  createLog('DIVIDE', prevResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add); // add() is wrong here.
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// currentResult = ((currentResult + 10) * 3) / 2 - 1;
