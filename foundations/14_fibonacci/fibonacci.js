const fibonacci = function(num) {
    if (typeof num != 'number') {
        num = parseInt(num);
    }

    // test case for === 1 not needed cuz for loop will just
    // be skipped and func returns fib[1] which is 1.
    if (num === 0) {
        return 0;
    } else if (num < 0) {
        return "OOPS";
    }

    let fib = [0, 1];
    for (let i = 2; i <= num; i++) {
        const sum = fib[i-2] + fib[i-1];
        fib.push(sum);
        console.log(fib);
    }
    
    return fib[num];
    //return fib.findLast((oioioi)=>oioioi);
};

// Do not edit below this line
module.exports = fibonacci;
