// Create a function rating that accepts an array (of functions) and a value.
// All the functions in the array will return true or false.rating should
// return the percentage of functions from the array that return true when the value is used as input.

function rating(arrOfFuncs, value) {
  let noOfTrue = 0;

  for (let i = 0; i < arrOfFuncs.length; i++) {
    if (arrOfFuncs[i](value)) {
      noOfTrue++;
    }
  }

  return (noOfTrue / arrOfFuncs.length) * 100;
}

// ============================================ //

/* Test 1 */
const isEven = (n) => n % 2 === 0;
const greaterThanFour = (n) => n > 4;
const isSquare = (n) => Math.sqrt(n) % 1 === 0;
const hasSix = (n) => n.toString().includes('6');

const checks = [isEven, greaterThanFour, isSquare, hasSix];

console.log(rating(checks, 64));
// output: 100
console.log(rating(checks, 66));
// output: 75
