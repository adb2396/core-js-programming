// Simple function to add 2
// to each element of an array,

/* Without callback */
function addTwo(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + 2;
  }

  return array;
}

/* With callback */
function addTwoWithCb(array, callback) {
  for (let i = 0; i < array.length; i++) {
    array[i] = callback(array[i]);
  }

  return array;
}

// ============================================ //

/* Test 1 */
console.log('Test 1', addTwo([1, 2, 3, 4, 5]));
// output: [ 3, 4, 5, 6, 7 ]

/* Test 2 */
function addTwoCb(value) {
  return value + 2;
}

let outArray = addTwoWithCb([1, 2, 3, 4, 5], addTwoCb);
console.log('Test 2', outArray);
// output: [ 3, 4, 5, 6, 7 ]
