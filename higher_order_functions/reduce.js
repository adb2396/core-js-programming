// Create a function called reduce that takes
// an array and reduces the elements to a single value.

/* reduce function */
function reduce(array, callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : array[0];

  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }

  return accumulator;
}

/* intersection function using reduce */
function intersectionUsingReduce(arrays) {
  let output = reduce(
    arrays,
    function (acc, val) {
      let common = [];
      for (let i = 0; i < val.length; i++) {
        if (acc.indexOf(val[i]) != -1) {
          common.push(val[i]);
        }
      }
      return common;
    },
    arrays[0]
  );

  return output;
}

// ============================================ //

/* Test 1 */
function add(a, b) {
  return a + b;
}

console.log(reduce([1, 2, 3, 4, 5], add, 0));
// output: 15

/* Test 2 */
const numList = [
  [5, 10, 15, 20],
  [15, 88, 1, 5, 7],
  [1, 10, 15, 5, 20],
];

console.log(intersectionUsingReduce(numList));
// output: [ 15, 5 ]
