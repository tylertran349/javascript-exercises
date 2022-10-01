const reverseString = function(inputStr) {
    let answer = "";
    for(let i = inputStr.length - 1; i >= 0; i--) {
        answer += inputStr[i];
    }
    return answer;
};

// Do not edit below this line
module.exports = reverseString;
