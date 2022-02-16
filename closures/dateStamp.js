// Create a function dateStamp that accepts a function and returns a function.
// The returned function will accept however many arguments the passed -in function
// accepts, and return an object with a date key that contains a timestamp with
// the time of invocation, and an output key that contains the result from
// invoking the passed -in function.HINT: You may need to research how to access
// information on Date objects.

function dateStamp(func) {
  function printStamp(val) {
    return {
      data: new Date().toLocaleString(),
      output: func(val),
    };
  }

  return printStamp;
}

// ============================================ //

/* Test 1 */
const stampedMultBy2 = dateStamp((n) => n * 2);

console.log(stampedMultBy2(4));
// log: { data: '2/16/2022, 10:16:14 PM', output: 8 }
console.log(stampedMultBy2(6));
// log: { data: '2/16/2022, 10:16:14 PM', output: 12 }
