// Create a function goodKeys that accepts an object and
// a callback.The callback will return either true or false.
// goodKeys will iterate through the object and perform the
// callback on each value.goodKeys will then return an array
// consisting only the keys whose associated values yielded
// a true return value from the callback.

function goodKeys(obj, callback) {
  let keys = [];

  for (let key in obj) {
    if (callback(obj[key])) {
      keys.push(key);
    }
  }

  return keys;
}

// ============================================ //

/* Test 1 */
const data = {
  mac: 'priest',
  dennis: 'calculating',
  charlie: 'birdlaw',
  dee: 'bird',
  frank: 'warthog',
};

const startsWithBird = function (str) {
  return str.slice(0, 4).toLowerCase() === 'bird';
};

console.log(goodKeys(data, startsWithBird));
// output: ['charlie', 'dee']
