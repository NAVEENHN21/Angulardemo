"use strict";
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
function greet() {
    console.log("Hello there..");
}
greet();
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 5));
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(5, 4));
console.log(add(5, 4, 7));
function expo(value, exponenet = 2) {
    return value ** exponenet;
}
console.log(expo(2, 2));
console.log(expo(2, 3));
console.log(expo(2, 4));
console.log(expo(3));
