// Create a function makeFuncTester that accepts an array (of two-element sub-arrays),
// and returns a function (that will accept a callback). The returned function
// should return true if the first elements(of each sub - array) being passed
// into the callback all yield the corresponding second elements
// (of the same sub - array).Otherwise, the returned function should return false.

function funcTester(arrOfTests) {
  function tests(callback) {
    for (let i = 0; i < arrOfTests.length; i++) {
      let [s1, s2] = arrOfTests[i];

      if (callback(s1) !== s2) {
        return false;
      }
    }

    return true;
  }

  return tests;
}

// ============================================ //

/* Test 1 */
const capLastTestCases = [];
capLastTestCases.push(['hello', 'hellO']);
capLastTestCases.push(['goodbye', 'goodbyE']);
capLastTestCases.push(['howdy', 'howdY']);

const shouldCapitalizeLast = makeFuncTester(capLastTestCases);

const capLastAttempt1 = (str) => str.toUpperCase();

const capLastAttempt2 = (str) => str.slice(0, -1) + str.slice(-1).toUpperCase();

console.log(shouldCapitalizeLast(capLastAttempt1));
// log: false
console.log(shouldCapitalizeLast(capLastAttempt2));
// log: true
