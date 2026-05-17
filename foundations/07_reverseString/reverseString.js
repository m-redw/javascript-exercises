const reverseString = function(string) {
    let strArr = string.split('');
    let reversedArr = strArr.reverse();
    let joinedReversed = reversedArr.join('');
    return joinedReversed
};

// Do not edit below this line
module.exports = reverseString;
