// Construct a function 'multiCallbackObj' that will accept two
// arrays: an array of values and an array of callbacks.
// 'multiCallbackObj' will return an object whose keys match the
// elements in the array of values.The corresponding values
// that are assigned to the keys will be arrays consisting
// of outputs from the array of callbacks, where the input
// to each callback is the key.

function multiCallbackObj(arrVals, arrCallbacks) {
  let output = {};

  for (let i = 0; i < arrVals.length; i++) {
    let keyVals = [];
    for (let j = 0; j < arrCallbacks.length; j++) {
      keyVals.push(arrCallbacks[j](arrVals[i]));
    }
    output[arrVals[i]] = keyVals;
  }

  return output;
}

// ============================================ //

/* Test 1 */

const strArray = ['catfood', 'glue', 'beer'];
const callbackArray = [
  function (str) {
    return str.toUpperCase();
  },
  function (str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  },
  function (str) {
    return str + str;
  },
];

console.log(multiCallbackObj(strArray, callbackArray));
// output: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
