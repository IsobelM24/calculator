let runningTotal = 0;
let buffer = "0";
let previousOperator = null;

const screen = document.querySelector('.screen');

function buttonClick(value) {
    if (isNaN(value)){
    //this is not a number
    handleSymbol(value);
    }
    else {
    //this is a number
    handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol) {
    console.log('handleSymbol', symbol);

    switch (symbol) {
    case 'C':
    buffer = '0';
    runningTotal = 0;
    break;

    case '=':
    if (previousOperator === null) {
    // need two numbers to do math 
    return;
    }
    
    flushOperation(parseInt(buffer));
    previousOperator = null;
    buffer = runningTotal;
    runningTotal = 0;
    break;

    case '+':
    handleMath(symbol)
    break;
    
    case '-':
    handleMath(symbol);
    break;

    case '×':
    handleMath(symbol);
    break;

    case '÷':
    handleMath(symbol);
    break;
    }
    }

function handleMath(symbol) {
    console.log('handleMath',symbol);
    if (buffer === '0') {
    //do nothing
    return;
    }

    const intBuffer = parseInt(buffer);
    if (runningTotal === 0) {
        runningTotal = intBuffer;
    }
    else {
        flushOperation(intBuffer);
    }

    previousOperator = symbol;
    buffer = '0';
}
    
function flushOperation (intBuffer) {
    console.log('flushOperation');
    if (previousOperator === '+') {
    runningTotal += intBuffer;
    }
    else if (previousOperator === '-') {
        runningTotal -= intBuffer;
    }
    else if (previousOperator === '×') {
        runningTotal *= intBuffer;
    }
    else {
        runningTotal /= intBuffer;
    }
}
    
function handleNumber(numberString) {
    console.log("handleNumber", numberString);
    if (buffer === "0") {
        buffer = numberString;
    }
    else {
        buffer = buffer + numberString;
        }
    }

function init() {
    console.log("init");
    document.querySelector('.calc-buttons').addEventListener("click",
     function (event) {
        buttonClick(event.target.innerText);  
        }
    );
}

init();

