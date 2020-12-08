const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];   

function getUserNumberInput(){
    return parseInt(userInput.value); 
}

function createAndWriteOutput( resultBeforeCal, operator, calcNumber){
    const calDescription = ` ${resultBeforeCal} ${operator} ${calcNumber}`;
    outputResult(currentResult,  calDescription);
}

function writeToLog(
    operationIdentifer, 
    previousResult, 
    operationNumber, 
    newResult)
    {
        const logEntry = {
            operation: operationIdentifer,
            previousResult: previousResult,
            number: operationNumber,
            result: newResult
        };
        logEntries.push(logEntry);
        console.log(logEntries); 
}


// to make our code cleaner using if conditions
function calculateResult(calculationType){
    const enteredNumber = getUserNumberInput();
    if  (
        calculationType !== 'SUM' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE' ||
        !enteredNumber                  // when divided by zero, our output doesnt change 

    ){
        return;
    }

   /* if  (
        calculationType === 'SUM' ||
        calculationType === 'SUBTRACT' ||
        calculationType === 'MULTIPLY' ||
        calculationType === 'DIVIDE'
    ) */                                // this can also work
    {
        
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'SUM'){
        currentResult += enteredNumber; 
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    } 

    createAndWriteOutput( initialResult, mathOperator, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult)
    }
    
}

function addition(){
    calculateResult('SUM');           
}

function subtract(){
    calculateResult('SUBTRACT');       
}

function multiply(){
    calculateResult('MULTIPLY')
}

function divide(){
    calculateResult('DIVIDE')
}


addBtn.addEventListener('click', addition);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);





