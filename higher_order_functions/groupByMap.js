// Create a function groupBy that accepts an array and a callback,
// and returns an object.groupBy will iterate through the array
// and perform the callback on each element.Each return value
// from the callback will be saved as a key on the object.
// The value associated with each key will be an array consisting
// of all the elements that resulted in that return value when passed into the callback.

function groupByMap(array, callback) {
  let groups = {};

  for (let i = 0; i < array.length; i++) {
    let key = callback(array[i]);

    if (!groups[key]) {
      groups[key] = [array[i]];
    } else {
      groups[key].push(array[i]);
    }
  }

  return groups;
}

// ============================================ //

/* Test 1 */
const decimals = [1.3, 2.1, 2.4];

const floored = function (num) {
  return Math.floor(num);
};

console.log(groupByMap(decimals, floored));
// output: { 1: [1.3], 2: [2.1, 2.4] }
