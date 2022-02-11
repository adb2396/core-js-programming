// Construct a function objectFilter that accepts
// an object as the first parameter and a callback
// function as the second parameter.objectFilter
// will return a new object.The new object will
// contain only the properties from the input object
// such that the property's value is equal to the
// property's key passed into the callback.

function objectFilter(obj, callback) {
  let output = {};

  for (let key in obj) {
    if (obj[key] == callback(key)) {
      output[key] = obj[key];
    }
  }

  return output;
}

// ============================================ //

/* Test 1 */
const cities = {
  London: 'LONDON',
  LA: 'Los Angeles',
  Paris: 'PARIS',
};

console.log(objectFilter(cities, (city) => city.toUpperCase()));
// output: { London: 'LONDON', Paris: 'PARIS'}
