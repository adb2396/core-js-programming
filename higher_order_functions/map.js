/* Map function */ 

// function to return a new array that are the 
// result of using the 'callback' function on 
// each element of the input array.

function map(array, callback) {
    let output = [];
  
    for(let i=0; i<array.length; i++) {
        output[i] = callback(array[i]);
    }
  
    return output;
}

function multiplyByTwo(value) {
    return value * 2;
}

let outArray = map([1, 2, 3, 4, 5], multiplyByTwo);

console.log(outArray);
// [ 2, 4, 6, 8, 10 ]