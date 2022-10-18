const fibonacci = function(num) {
    if(num < 0) {
        return "OOPS";
    }

    function fibonacci(n) {
        if(n <= 1) {
            return n;
        }
        return fibonacci(n-1) + fibonacci(n-2);
    }
    return fibonacci(num * 1);
};

// Do not edit below this line
module.exports = fibonacci;
