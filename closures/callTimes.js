// Write a function, callTimes, that returns a new function.
// The new function should return the number of times it’s been called.

function callTimes() {
  let count = 0;

  function countCalls() {
    count++;
    return count;
  }

  return countCalls;
}

// ============================================ //

/* Test 1 */
let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();

console.log(myNewFunc1()); // log: 1
console.log(myNewFunc1()); // log: 2
console.log(myNewFunc2()); // log: 1
console.log(myNewFunc2()); // log: 2
