function randomFunction() {
    return Math.random();
}
console.log(randomFunction());

function randomFunction1() {
    return Math.floor(Math.random()*10);   // generate random whole number
}
console.log(randomFunction1());

// parsing the sting to integer.

function convertToInt(str) {
    return parseInt(str);
}
console.log(convertToInt("34"));

// Terniary operator (check equal)

function checkEqual (a,b) {
    return a === b ? true: false;

}
console.log(checkEqual(1,2));

function checkSign (val) {
    return val > 0 ? "positive" : val < 0 ? "negative":"zero";  // checking sign using terniary operator

}
console.log(checkSign(-10));






