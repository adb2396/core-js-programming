// Construct a function intersection that takes
// in an array of arrays, compares the inner
// arrays, and returns a new array with elements
// found in all of them.

/* intersection function using reduce */
function intersection(arrays) {
  let output = arrays[0];

  for (let i = 1; i < arrays.length; i++) {
    let common = [];
    for (let j = 0; j < arrays.length; j++) {
      if (arrays[i].includes(output[j])) {
        common.push(output[j]);
      }
    }
    output = common;
  }

  return output;
}

// ============================================ //

/* Test 1 */
const numList = [
  [5, 10, 15, 20],
  [15, 88, 1, 5, 7],
  [1, 10, 15, 5, 20],
];

console.log(intersection(numList));
// output: [ 5, 15 ]
