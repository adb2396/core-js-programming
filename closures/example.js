// Create a function createFunction that creates and returns
// a function. When that created function is called, it should print "hello".

/* closure example */
function createFunction() {
  function print() {
    console.log('hello');
  }

  return print;
}

// ============================================ //

/* Test 1 */
const function1 = createFunction();

function1();
// log: hello
