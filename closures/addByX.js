// create a function addByX that returns a function that will add an input by x.

function addByX(x) {
  function addInput(input) {
    console.log(x + input);
  }

  return addInput;
}

// ============================================ //

/* Test 1 */
const addByTwo = addByX(2);
addByTwo(1); // log: 3
addByTwo(2); // log: 4
addByTwo(3); // log: 5

/* Test 2 */
const addByThree = addByX(3);
addByThree(1); // log: 4
addByThree(2); // log: 5

/* Test 3 */
const addByFour = addByX(4);
addByFour(4); // log: 8
addByFour(5); // log: 9
