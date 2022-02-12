// Write a function after that takes the number of
// times the callback needs to be called before
// being executed as the first parameter and the
// callback as the second parameter.

function after(count, func) {
  function call() {
    count--;
    if (count == 0) {
      return func();
    }
  }

  return call;
}

// ============================================ //

/* Test 1 */
const called = function () {
  return 'hello';
};

const afterCalled = after(3, called);

console.log(afterCalled()); // log: undefined
console.log(afterCalled()); // log: undefined
console.log(afterCalled()); // log: 'hello'
