const repeatString = function(string, num) {
    let finalString = "";
    if(num < 0) {
        finalString = "ERROR";
        return finalString;
    }
    for(let i = 0; i < num; i++) {
        finalString += string;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
