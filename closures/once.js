// Write a function once that accepts a callback as input
// and returns a function. When the returned function is
// called the first time, it should call the callback and
// return that output.If it is called any additional times,
// instead of calling the callback again it will simply return
// the output value from the first time it was called.

function once(func) {
  let firstTimeValue;

  function oneTimeCall(val) {
    if (!firstTimeValue) {
      firstTimeValue = func(val);
      return firstTimeValue;
    }

    return firstTimeValue;
  }

  return oneTimeCall;
}

// ============================================ //

/* Test 1 */
function addTwo(val) {
  return val + 2;
}

const onceFunc = once(addTwo);

console.log(onceFunc(4)); // log: 6
console.log(onceFunc(10)); // log: 6
console.log(onceFunc(9001)); // log: 6
