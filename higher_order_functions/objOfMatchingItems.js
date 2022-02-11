// Construct a function 'objOfMatchingItems' that accepts two arrays
// and a callback.'objOfMatchingItems' will build an object and return
// it.To build the object, 'objOfMatchingItems' will test each element
// of the first array using the callback to see if the output
// matches the corresponding element(by index) of the second array.
// If there is a match, the element from the first array becomes a
// key in an object, and the element from the second array becomes
// the corresponding value.

/* objOfMatchingItems function */
function objOfMatchingItems(array1, array2, callback) {
  let output = {};

  for (let i = 0; i < array1.length; i++) {
    if (array2[i] == callback(array1[i])) {
      output[array1[i]] = array2[i];
    }
  }

  return output;
}

// ============================================ //

/* Test 1 */
const firstArr = ['hi', 'howdy', 'bye', 'later', 'hello'];
const secondArr = ['HI', 'Howdy', 'BYE', 'LATER', 'hello'];

function matchingFn(str) {
  return str.toUpperCase();
}

let matchedItems = objOfMatchingItems(firstArr, secondArr, matchingFn);

console.log(matchedItems);
// output: { hi: 'HI', bye: 'BYE', later: 'LATER' }
