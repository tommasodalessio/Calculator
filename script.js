/* create the function for the calculator 
we need function for: 
    -add 
    -subtract 
    -multiply 
    -divide 
    -operation: a function that takes two parameter and an operator a do the math recalling the above function
*/

function add (operator1, operator2) {
    operator1 = Number(operator1);
    operator2 = Number(operator2);
    return operator1 + operator2;
}

function subtract (operator1, operator2) {
    operator1 = Number(operator1);
    operator2 = Number(operator2);
    return operator1 - operator2;
}

function multiply (operator1, operator2) {
    operator1 = Number(operator1);
    operator2 = Number(operator2);
    return operator1 * operator2;
}

function divide (operator1, operator2) {
    operator1 = Number(operator1);
    operator2 = Number(operator2);
    return operator1 / operator2;
}

function operation (operator1, operator2, sign) {
    if(sign == "plus") return add(operator1, operator2);
    if(sign == "minus") return subtract(operator1, operator2);
    if(sign == "times") return multiply(operator1, operator2);
    if(sign == "divide") return divide(operator1, operator2);
}

console.log(operation(5, 5, "plus"));
console.log(operation(5, 5, "minus"));
console.log(operation(5, 5, "times"));
console.log(operation(5, 5, "divide"));