// function to return a new array that are the
// result of using the 'callback' function on
// each element of the input array.

/* map function */
function map(array, callback) {
  let output = [];

  for (let i = 0; i < array.length; i++) {
    output[i] = callback(array[i]);
  }

  return output;
}

// ============================================ //

/* Test 1 */
let outArray;

function multiplyByTwo(value) {
  return value * 2;
}

outArray = map([1, 2, 3, 4, 5], multiplyByTwo);
console.log('Test 1', outArray);
// output: [ 2, 4, 6, 8, 10 ]
