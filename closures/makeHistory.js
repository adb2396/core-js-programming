// Create a function makeHistory that accepts a number (which will
// serve as a limit), and returns a function (that will accept a string).
// The returned function will save a history of the most recent "limit" number
// of strings passed into the returned function (one per invocation only).
// Every time a string is passed into the function, the function should return
// that same string with the word 'done' after it(separated by a space).However,
// if the string 'undo' is passed into the function, then the function should delete the
// last action saved in the history, and return that deleted string with the word 'undone'
// after(separated by a space).If 'undo' is passed into the function and the function's history is empty,
// then the function should return the string 'nothing to undo'.

function makeHistory(limit) {
  let store = [];

  function updateStore(str) {
    if (str != 'undo') {
      store.push(str);

      if (store.length > limit) {
        store.shift();
      }

      return str + ' done';
    }

    if (store.length == 0) {
      return 'nothing to undo';
    }

    let lastStr = store.pop();
    return lastStr + ' undone';
  }

  return updateStore;
}

// ============================================ //

/* Test 1 */
const myActions = makeHistory(3);
console.log(myActions('jump')); // log: 'jump done'
console.log(myActions('undo')); // log: 'jump undone'
console.log(myActions('walk')); // log: 'walk done'
console.log(myActions('code')); // log: 'code done'
console.log(myActions('pose')); // log: 'pose done'
console.log(myActions('undo')); // log: 'pose undone'
console.log(myActions('undo')); // log: 'code undone'
console.log(myActions('undo')); // log: 'nothing to undo'
