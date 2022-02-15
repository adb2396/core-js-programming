// Write a function delay that accepts a callback as
// the first parameter and the wait in milliseconds before
// allowing the callback to be invoked as the second parameter.
// Any additional arguments after wait are provided to func when it is invoked.

function delay(func, wait) {
  setTimeout(func, wait);
}

// ============================================ //

/* Test 1 */
function log() {
  console.log('Hi there!!');
}

delay(log, 1000);
