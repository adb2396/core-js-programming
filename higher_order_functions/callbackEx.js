// Simple function to add 2
// to each element of an array,

/* Without callback */
function addTwo(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] + 2;
    }

    return array;
}

console.log(addTwo([1, 2, 3, 4, 5]));
// output: [ 3, 4, 5, 6, 7 ]

// ============================================ //

// With callback
function addTwoWithCb(array, callback) {
    for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
    }

    return array;
}

function addTwoCb(value) {
    return value + 2;
}

let outArray = addTwoWithCb([1, 2, 3, 4, 5], addTwoCb);

console.log();
// output: [ 3, 4, 5, 6, 7 ]
