// Create a function called forEach that takes an
// array and a callback, and runs the callback on
// each element of the array. forEach does not return anything.

/* forEach function */
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

/* map function using forEach */
function mapUsingForEach(array, callback) {
  let mappedArray = [];

  forEach(array, function (val, idx) {
    mappedArray[idx] = callback(val);
  });

  return mappedArray;
}

// ============================================ //

/* Test 1 */
let word = '';
let letters = ['t', 'e', 's', 't'];

function createWord(char) {
  word += char;
}

forEach(letters, createWord);
console.log('Test 1', word);
// output: test

/* Test 2 */
function divideByTwo(val) {
  return val / 2;
}

outArray = mapUsingForEach([2, 4, 6, 8], divideByTwo);
console.log('Test 2', outArray);
// output: [ 1, 2, 3, 4 ]
