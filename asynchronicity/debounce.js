/* 
    Write a function called debounce that accepts a function and returns 
    a new function that only allows invocation of the given function after 
    interval milliseconds have passed since the last time the returned function ran.
    
    Additional calls to the returned function within the interval time should 
    not be invoked or queued, but the timer should still get reset.
*/

function debounce(callback, interval) {
  let timer;

  function manageCallback() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log('*', callback());
    }, interval);
  }

  return manageCallback;
}

// ============================================ //

/* Test 1 */
function giveHi() {
  return 'hi';
}

const giveHiSometimes = debounce(giveHi, 3000);
giveHiSometimes();

setTimeout(function () {
  console.log('1', giveHiSometimes());
}, 2000);

setTimeout(function () {
  console.log('2', giveHiSometimes());
}, 4000);

setTimeout(function () {
  console.log('3', giveHiSometimes());
}, 8000);

/* Log:
    1 undefined
    2 undefined
    * hi
    3 undefined
    * hi
*/
