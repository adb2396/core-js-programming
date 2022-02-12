// Create a function countBy that accepts an array
// and a callback, and returns an object.countBy will
// iterate through the array and perform the callback
// on each element.Each return value from the callback
// will be saved as a key on the object.The value associated
// with each key will be the number of times that particular return value was returned.

function countBy(array, callback) {
  let oddEvenCountObj = {};

  for (let i = 0; i < array.length; i++) {
    let key = callback(array[i]);
    if (!oddEvenCountObj[key]) {
      oddEvenCountObj[key] = 1;
    } else {
      oddEvenCountObj[key]++;
    }
  }

  return oddEvenCountObj;
}

// ============================================ //

/* Test 1 */

function isOddOrEven(num) {
  if (num % 2 === 0) return 'even';
  else return 'odd';
}

console.log(countBy([1, 2, 3, 4, 5], isOddOrEven));
// output: { odd: 3, even: 2 }
