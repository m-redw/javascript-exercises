const removeFromArray = function(arr, ...removables) {
    return arr.filter((num) => {
        for (const arg of removables) {
            if (num === arg) return false;
        }
        return true;
    });
};

// Do not edit below this line
module.exports = removeFromArray;
