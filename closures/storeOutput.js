// Create a function saveOutput that accepts a function
// (that will accept one argument), and a string(that will act as a password).
// saveOutput will then return a function that behaves exactly like the
// passed -in function, except for when the password string is passed in as an
// argument.When this happens, the returned function will return an object
// with all previously passed -in arguments as keys, and the corresponding outputs as values.

function storeOutput(func, magicWord) {
  let output = {};

  function save(val) {
    if (val !== magicWord) {
      let out = func(val);
      output[val] = out;
      return out;
    }

    return output;
  }

  return save;
}

// ============================================ //

/* Test 1 */
const multiplyBy2 = function (num) {
  return num * 2;
};

const multBy2AndLog = storeOutput(multiplyBy2, 'boo');

console.log(multBy2AndLog(2)); // log: 4
console.log(multBy2AndLog(9)); // log: 18
console.log(multBy2AndLog('boo')); // log: { 2: 4, 9: 18 }
