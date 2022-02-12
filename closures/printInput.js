// Create a function createFunctionPrinter that accepts
// one input and returns a function. When that created function is called, it should print out the input that was used when the function was created.

function createFunctionPrinter(input) {
  function print() {
    console.log(input);
  }

  return print;
}

// ============================================ //

/* Test 1 */
const printSample = createFunctionPrinter('sample');
printSample();
// log: sample

/* Test 2 */
const printHello = createFunctionPrinter('hello');
printHello();
// log: hello
