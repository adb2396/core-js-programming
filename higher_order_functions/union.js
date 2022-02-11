// Construct a function union that takes
// in an array of arrays, compares the inner
// arrays, and returns a new array that
// contains all elements. The function should
// not return duplicate elements.

/* union function */
function union(arrays) {
  let output = [];

  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      if (output.indexOf(arrays[i][j]) == -1) {
        output.push(arrays[i][j]);
      }
    }
  }

  return output;
}

// ============================================ //

/* Test 1 */
const unionArr = [
  [5, 10, 15],
  [15, 88, 1, 5, 7],
  [100, 15, 10, 1, 5],
];

console.log(union(unionArr));
// should log: [5, 10, 15, 88, 1, 7, 100]
