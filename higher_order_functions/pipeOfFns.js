// Create a function pipe that accepts an array (of functions)
// and a value.pipe should input the value into the first function
// in the array, and then use the output from that function as input
// for the second function, and then use the output from that function
// as input for the third function, and so forth, until we have an output
// from the last function in the array.pipe should return the final output.

function pipeOfFns(arrOfFuncs, value) {
  let output = arrOfFuncs[0](value);

  for (let i = 1; i < arrOfFuncs.length; i++) {
    output = arrOfFuncs[i](output);
  }

  return output;
}

// ============================================ //

/* Test 1 */
const capitalize = (str) => str.toUpperCase();
const addLowerCase = (str) => str + str.toLowerCase();
const repeat = (str) => str + str;

const capAddlowRepeat = [capitalize, addLowerCase, repeat];

console.log(pipeOfFns(capAddlowRepeat, 'cat'));
// output: 'CATcatCATcat'
