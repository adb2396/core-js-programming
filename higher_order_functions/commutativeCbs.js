// Create a function commutative that accepts two callbacks
// and a value.commutative will return a boolean indicating if
// the passing the value into the first function, and then passing
// the resulting output into the second function, yields the same output
// as the same operation with the order of the functions reversed
// (passing the value into the second function, and then passing the output into the first function).

function commutativeCbs(func1, func2, value) {
  let forward = func2(func1(value));

  let reverse = func1(func2(value));

  return forward == reverse;
}

// ============================================ //

/* Test 1 */
const multBy3 = (n) => n * 3;

const divBy4 = (n) => n / 4;

const subtract5 = (n) => n - 5;

console.log(commutativeCbs(multBy3, divBy4, 11));
// output: true
console.log(commutativeCbs(multBy3, subtract5, 10));
// output: false
console.log(commutativeCbs(divBy4, subtract5, 48));
// output: false
