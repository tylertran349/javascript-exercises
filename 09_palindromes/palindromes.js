const palindromes = function (text) {
    let newText = text.toLowerCase().replace(/[^A-Za-z]/g, "");
    let reversedText = newText.split("").reverse().join("");
    if(reversedText === newText) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
