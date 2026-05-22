const palindromes = function (string) {
    const validChars = 'abcdefghijklmnopqrstuvwxyz1234567890';

    const newString = string
                        .toLowerCase()
                        .split('')
                        .filter(char => validChars.includes(char))
                        .join('');

    const reverseStr = newString
                        .split('')
                        .reverse()
                        .join('');

    return newString === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
