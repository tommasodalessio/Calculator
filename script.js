/* create the function for the calculator 
we need function for: 
    -add 
    -subtract 
    -multiply 
    -divide 
    -operation: a function that takes two parameter and an operator a do the math recalling the above function
*/

function add (addend1, addend2) {
    addend1 = Number(addend1);
    addend2 = Number(addend2);
    return addend1 + addend2;
}

function subtract (addend1, addend2) {
    addend1 = Number(addend1);
    addend2 = Number(addend2);
    return addend1 - addend2;
}

function multiply (addend1, addend2) {
    addend1 = Number(addend1);
    addend2 = Number(addend2);
    return addend1 * addend2;
}

function divide (addend1, addend2) {
    addend1 = Number(addend1);
    addend2 = Number(addend2);
    return addend1 / addend2;
}
