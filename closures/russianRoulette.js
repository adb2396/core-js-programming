// Create a function russianRoulette that accepts a number (let us call it n),
// and returns a function. The returned function will take no arguments,
// and will return the string 'click' the first n - 1 number of times it is
// invoked.On the very next invocation(the nth invocation), the returned function
// will return the string 'bang'.On every invocation after that, the returned function
// returns the string 'reload to play again'.

function russianRoulette(num) {
  function decrement() {
    num--;
    if (num < 0) {
      return 'reload to play again';
    }

    if (num == 0) {
      return 'bang';
    }

    return 'click';
  }

  return decrement;
}

// ============================================ //

/* Test 1 */
const play = russianRoulette(3);

console.log(play()); // log: 'click'
console.log(play()); // log: 'click'
console.log(play()); // log: 'bang'
console.log(play()); // log: 'reload to play again'
console.log(play()); // log: 'reload to play again'
