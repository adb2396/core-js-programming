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

/* union function using reduce */
function union(arrays) {
  let output = reduce(
    arrays,
    function (acc, val) {
      for (let i = 0; i < val.length; i++) {
        if (acc.indexOf(val[i]) == -1) {
          acc.push(val[i]);
        }
      }

      return acc;
    },
    []
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

/* Test 3 */
const numList1 = [
  [5, 10, 15],
  [15, 88, 1, 5, 7],
  [100, 15, 10, 1, 5],
];

console.log(union(numList1));
// should log: [5, 10, 15, 88, 1, 7, 100]
