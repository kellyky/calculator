// Addition
function add(number1, number2) {
  return number1 + number2;
}

// Subtraction
function subtract(number1, number2){
  return number1 - number2;
}

// Multiplication
function multiply(number1, number2){
  return number1 * number2;
}

// Division
function divide(number1, number2){
  return number1 / number2;
}

// Assigns values to number1 and number2 based on user input
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

// Assigns value to result based on the function called
const result = multiply(number1, number2);

// Alert to show the user the result
alert(result);
