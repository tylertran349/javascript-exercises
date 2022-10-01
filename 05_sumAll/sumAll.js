const sumAll = function(start, end) {
    let sum = 0;
    if(typeof(start) === "string" || typeof(end) === "string" || typeof(start) === "object" || typeof(end) === "object") {
        return 'ERROR';
    } else if(start < 0 || end < 0) {
        return 'ERROR';
    } else {
        let biggestNum = Math.max(start, end);
        let smallestNum = Math.min(start, end);
        for(let i = smallestNum; i <= biggestNum; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
