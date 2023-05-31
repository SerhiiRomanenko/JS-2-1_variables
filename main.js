//-------------------------------- FIRST TASK ---------------------------------->

let yourName = prompt("Enter your name: ");
alert(`Hello, ${yourName}! How are you?`);


//-------------------------------- SECOND TASK ---------------------------------->

let firstNum = prompt("Enter 1st number: ");
let secondNum = prompt("Enter 2nd number: ");

if (+firstNum !== +firstNum || +secondNum !== +secondNum) {
        console.log("You should choose number");
    } else {

    let action = prompt("Enter action (+ - * /): ");
        if (action === "+") {
            console.log(+firstNum + +secondNum);
        } else if (action === "-") {
            console.log(+firstNum - +secondNum);
        } else if (action === "*") {
            console.log(+firstNum * +secondNum);
        } else if (action === "/") {
            console.log(+firstNum / +secondNum);
        } else {
            console.log("You choose wrong action or choose nothing =(")
        }
}



//-------------------------------- THIRD TASK ---------------------------------->

let firstValue = prompt("Enter first value: ");
let secondValue = prompt("Enter second value: ");
console.log(firstValue === secondValue);    //  or ==


//-------------------------------- FOURTH TASK ---------------------------------->

let firstNumber = 5;
let secondNumber = 3;
let thirdNumber = 4;

console.log((firstNumber + secondNumber + thirdNumber) / 3);


//-------------------------------- FIFTH TASK ---------------------------------->

let fiveDigitNumber = 12345; // ===> 1 2 3 4 5

let fifthDigit = fiveDigitNumber % 10;

fiveDigitNumber = Math.floor(fiveDigitNumber * 0.1);
let fourthDigit = fiveDigitNumber % 10;

fiveDigitNumber = Math.floor(fiveDigitNumber * 0.1);
let thirdDigit = fiveDigitNumber % 10;



fiveDigitNumber = Math.floor(fiveDigitNumber * 0.1);
let secondDigit = fiveDigitNumber % 10;


fiveDigitNumber = Math.floor(fiveDigitNumber * 0.1);
let firstDigit = fiveDigitNumber % 10;

console.log(`${firstDigit} ${secondDigit} ${thirdDigit} ${fourthDigit} ${fifthDigit}`);



