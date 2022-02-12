// Create a function highestFunc that accepts an object
// (which will contain functions) and a subject(which is any value).
// highestFunc should return the key of the object whose associated
// value(which will be a function) returns the largest number,
// when the subject is given as input.

function highestFn(objOfFuncs, subject) {
  let fnKey = '';
  let highest = Number.MIN_VALUE;

  for (let key in objOfFuncs) {
    let val = objOfFuncs[key](subject);
    if (val > highest) {
      highest = val;
      fnKey = key;
    }
  }

  return fnKey;
}

// ============================================ //

/* Test 1 */
const groupOfFuncs = {};
groupOfFuncs.double = (n) => n * 2;
groupOfFuncs.addTen = (n) => n + 10;
groupOfFuncs.inverse = (n) => n * -1;

console.log(highestFn(groupOfFuncs, 5));
// output: 'addTen'
console.log(highestFn(groupOfFuncs, 11));
// output: 'double'
console.log(highestFn(groupOfFuncs, -20));
// output: 'inverse'
