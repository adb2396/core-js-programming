/* 
    Write a SecondClock class, with two methods: start and reset.​

    start: upon invocation, invokes a callback (this.cb, defined in the constructor) 
           on an argument every second, with the argument to the callback being the current seconds "value".
           after every 60 seconds at 61 seconds return value should repeat from 1. 

    reset: upon invocation, completely stops the "clock". Also resets the time back to the beginning.
*/

class SecondClock {
  constructor(cb) {
    this.cb = cb;
    this.val = 0;
    this.secTimer = null;
  }

  start() {
    this.secTimer = setInterval(() => {
      this.val++;
      if (this.val > 60) {
        this.val = 1;
      }

      this.cb(this.val);
    }, 1000);
  }

  reset() {
    clearInterval(this.secTimer);
  }
}

// ============================================ //

/* Test 1 */
const clock = new SecondClock((val) => {
  console.log(val);
});

console.log('Started Clock.');

clock.start();

setTimeout(() => {
  clock.reset();
  console.log('Stopped Clock after 6 seconds.');
}, 6000);

/* Log:
    Started Clock.
    1
    2
    3
    4
    5
    6
    Stopped Clock after 6 seconds.
*/
