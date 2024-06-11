"use strict";
//! functions 
function addTwoNumbers(a, b) {
    return a + b;
}
//? arrow Function 
const substractTwoNumbers = (a, b) => a + b;
const addAllNumbers = (items) => {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
};
//! return type inference 
function formatGreeting(name, greeting) {
    return `${greeting} ${name}`;
}
const result = formatGreeting('Somel', "Hello");
