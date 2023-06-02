class CalculationError extends Error{
    constructor(message){
        super(message);
        this.name = "CalculationError";
    }
}

window.onerror = function(){
    console.log("An error was triggered :(");
};

let form = document.querySelector('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      let output = document.querySelector('output');
      let firstNum = document.querySelector('#first-num').value;
      let secondNum = document.querySelector('#second-num').value;
      let operator = document.querySelector('#operator').value;
      try{
        if(isNaN(`${firstNum}`) || isNaN(`${secondNum}`)){
            throw new SyntaxError("Please only input numbers into the calculator!");
        }
        if(`${operator}` == '/' && `${secondNum}` == '0'){
            throw new CalculationError("Cannot divide by 0");
        }
        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
      }catch(err){
        alert(err);
      }finally{
        console.log(`Attemped the operation ${firstNum} ${operator} ${secondNum}`);
      }
    });

    let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

    // Start your code here
    // You may move this JS to another file if you wish

// Console Log Button Function
let consoleLogBtn = errorBtns[0];
    consoleLogBtn.addEventListener('click', () => {
        let output = document.querySelector('output');
        console.log('The answer is: ', output.innerHTML);
    });

//Console Error Button Function
let consoleErrorBtn = errorBtns[1];
    consoleErrorBtn.addEventListener('click', (e) =>{
        console.error('Error with the calculation', e);
    });

//Console Count Button Function
let consoleCountBtn = errorBtns[2];
    consoleCountBtn.addEventListener('click', () =>{
       // let output = document.querySelector('output');
        console.count('Console Count');
    });

//Console Warn Button Function
let consoleWarnBtn = errorBtns[3];
    consoleWarnBtn.addEventListener('click', () =>{
        console.warn('warning to the console');
    });

//Console Assert Button Function
let consoleAssertBtn = errorBtns[4];
    consoleAssertBtn.addEventListener('click', () =>{
        const y = 1;
        const msg = 'expected the number to be greater than 2';
        console.assert(y >= 2, {y, msg});
    });

//Console Clear Button Function
let consoleClearBtn = errorBtns[5];
    consoleClearBtn.addEventListener('click', () =>{
        console.clear();
    });

//Console Dir Button Function
let consoleDirBtn = errorBtns[6];
    consoleDirBtn.addEventListener('click', () => {
        console.dir(form);
    });

//Console DirXML Button Function
let consoleDirXML = errorBtns[7];
    consoleDirXML.addEventListener('click', () =>{
        let calculateBtn = document.getElementById('calculate');
        console.dirxml(calculateBtn);
    });

//Console Group Start Button Function
let consoleGroupStart = errorBtns[8];
    consoleGroupStart.addEventListener('click', () =>{
        const label = 'All Console Responses';
        console.group(label);
    });

//Console Group End Button Function
let consoleGroupEnd = errorBtns[9];
    consoleGroupEnd.addEventListener('click', () => {
        console.groupEnd();
    });

//Console Table Button Function
let consoleTableBtn = errorBtns[10];
    consoleTableBtn.addEventListener('click', () => {
        let friends = [
            {
                first: 'Jared',
                last: 'Jose',
                location: 'San Diego',
            },
            {
                first: 'Alessandra',
                last: 'Tjitro',
                location: 'San Diego',
            },
            {
                first: 'Abbi',
                last: 'Shilts',
                location: 'Minnesota',
            },
            {
                first: 'Annie',
                last: 'Liu',
                location: 'San Jose',
            }
        ];
        console.table(friends);
    });

let label = 'Timer Button';

//Console Start Timer Button Function
let startTimerBtn = errorBtns[11];
    startTimerBtn.addEventListener('click', () => {
        console.time(label);
    });

//Console End Timer Button Function
let endTimerBtn = errorBtns[12];
    endTimerBtn.addEventListener('click', () => {
        console.timeEnd(label);
    });

//Console Trace Button Function
let consoleTraceBtn = errorBtns[13];
    consoleTraceBtn.addEventListener('click', () => {
        const func1 = () => {func2();};
        const func2 = () => {func3();};
        const func3 = () => {console.trace();};
        func1();
    });

//Trigger Global Error Function
let globalErrorBtn = errorBtns[14];
    globalErrorBtn.addEventListener('click', () =>{
        badFunctionThatCausesError();
    });
