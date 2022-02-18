/* In what order should the console logs come out? Howdy first or Partnah first ? */

function sayHowdy() {
  console.log('Howdy');
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log('Partnah');
}

// testMe();
/* Log: 
    Partnah
    Howdy
*/

// ============================================ //

/* Create a function delayedGreet that console logs welcome after 3 seconds. */

function delayedGreet() {
  setTimeout(function () {
    console.log('welcome');
  }, 3000);
}

// delayedGreet();
/* Log: 
    welcome     // after 3 seconds
*/

// ============================================ //

/* Create a function helloGoodbye that console logs hello right away, and good bye after 2 seconds. */

function helloGoodbye() {
  console.log('hello');
  setTimeout(function () {
    console.log('good bye');
  }, 2000);
}

// helloGoodbye();
/* Log: 
    hello
    good bye    // after 2 seconds
*/

// ============================================ //

/* Create a function brokenRecord that console logs hi again every second. */

function brokenRecord() {
  setInterval(function () {
    console.log('hi again');
  }, 1000);
}

// brokenRecord();
/* Log:
    hi again    // every second
*/

// ============================================ //

/* Create a function limitedRepeat that console logs hi for now every second, but only for 5 seconds. */

function limitedRepeat() {
  let hiInterval = setInterval(function () {
    console.log('hi for now');
  }, 1000);

  setTimeout(function () {
    clearInterval(hiInterval);
  }, 5000);
}

// limitedRepeat();
/* Log:
    hi for now    // five times every second 
*/

// ============================================ //

/* 
  Write a function called everyXsecsForYsecs that will accept 
  three arguments: a function func, a number interval, and another number duration.
  everyXsecsForYsecs will execute the given function every interval number 
  of milliseconds, but then automatically stop after duration milliseconds.
*/

function everyXsecsForYsecs(func, interval, duration) {
  let funcInterval = setInterval(function () {
    func();
  }, interval);

  setTimeout(function () {
    clearInterval(funcInterval);
  }, duration);
}

function theEnd() {
  console.log('This is the end!');
}

// everyXsecsForYsecs(theEnd, 2000, 20000);
/* Log:
    This is the end   // 10 times after every 2 seconds
*/

// ============================================ //

/*  
  Write a function delayCounter that accepts a number (called 'target') as the 
  first argument and a number of milliseconds (called 'wait') as the second argument,
  and returns a function. When the returned function is invoked, it should log to 
  the console all of the numbers between 1 and the target number, spaced apart by 'wait' milliseconds.
*/

function delayCounter(target, wait) {
  let count = 1;
  function printer() {
    setInterval(function () {
      if (count <= target) {
        console.log(count);
        count++;
      }
    }, wait);
  }

  return printer;
}

const countLogger = delayCounter(3, 1000);
countLogger();

/* Log:
    1
    2
    3   // every second
*/

// ============================================ //

/* Write a function, promised, that takes in a value. This function will return a promise that will resolve after 2 seconds. */

function promised(val) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(val);
    }, 2000);
  });

  return promise;
}

const createPromise = promised('wait for it...');
createPromise.then((val) => console.log(val));

/* Log:
    wait for it...  // after 2 seconds
*/
