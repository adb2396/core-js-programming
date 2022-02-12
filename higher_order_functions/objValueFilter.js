// Create a function objFilter that accepts an object
// and a callback.objFilter should make a new object,
// and then iterate through the passed -in object, using
// each key as input for the callback.If the output from the
// callback is equal to the corresponding value, then that
// key - value pair is copied into the new object. objFilter will return this new object.

function objValueFilter(obj, callback) {
  let operatedObj = {};

  for (let key in obj) {
    if (obj[key] == callback(key)) {
      operatedObj[key] = obj[key];
    }
  }

  return operatedObj;
}

// ============================================ //

/* Test 1 */
const startingObj = {
  6: 3,
  2: 1,
  12: 4,
};

console.log(objValueFilter(startingObj, (n) => n / 2));
// should log: { 2: 1, 6: 3 }
