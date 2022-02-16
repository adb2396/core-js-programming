// Create a function average that accepts no arguments, and returns a
// function (that will accept either a number as its lone argument,
// or no arguments at all). When the returned function is invoked with
// a number, the output should be average of all the numbers have ever
// been passed into that function (duplicate numbers count just like any
// other number). When the returned function is invoked with no arguments,
// the current average is outputted.If the returned function is invoked with
// no arguments before any numbers are passed in, then it should return 0.

function average() {
  let numbers = [];

  function compute(num) {
    if (numbers.length == 0 && !num) {
      return 0;
    }

    if (num) {
      numbers.push(num);
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }

    return sum / numbers.length;
  }

  return compute;
}

// ============================================ //

/* Test 1 */
const avgSoFar = average();

console.log(avgSoFar()); // log: 0
console.log(avgSoFar(4)); // log: 4
console.log(avgSoFar(8)); // log: 6
console.log(avgSoFar()); // log: 6
console.log(avgSoFar(12)); // log: 8
console.log(avgSoFar()); // log: 8
