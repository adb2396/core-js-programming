// Write a function rollCall that accepts an array of names
// and returns a function. The first time the returned function
// is invoked, it should log the first name to the console.
// The second time it is invoked, it should log the second name to the
// console, and so on, until all names have been called.
// Once all names have been called, it should log 'Everyone accounted for'.

function rollCall(names) {
  let index = -1;

  function print() {
    index++;
    if (index < names.length) {
      console.log(names[index]);
    } else {
      console.log('Everyone accounted for');
    }
  }

  return print;
}

// ============================================ //

/* Test 1 */
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth']);
rollCaller(); // log: 'Victoria'
rollCaller(); // log: 'Juan'
rollCaller(); // log: 'Ruth'
rollCaller(); // log: 'Everyone accounted for'
