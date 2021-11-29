/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function sumToString(a, b) {
    let sum = `${a} + ${b} = ${a + b}`;
    return sum;
}


/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {
    let array = [];
    for (let i = startNumber; i < endNumber + 1; i++) {
        array[array.length] = i;
    }
    return array;
}

/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
export function maxAndMin(numbers) {
    var min = Math.min(...numbers);
    var max = Math.max(...numbers);
    return {
        "min": min,
        "max": max
    };
}

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array) {
    array.sort ((a, b) => a - b);
    let value = [], freq = [], prev;
    for(let i = 0; i < array.length; i++) {
        if(array[i] == prev) {
            freq[freq.length - 1] += 1;
        } else {
            value[value.length] = array[i];
            freq[freq.length] = 1;
        }
        prev = array[i];
    }
    let result = {};
    value.forEach((val, i) => result[val] = freq[i]);
    return result;
}
