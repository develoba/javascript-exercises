const palindromes = function (str) {
    let strSplit = str.toLowerCase().split(/[., ,?,!]/).join("");
    let strSplitReverse = strSplit.split("").reverse().join("");

    // Compare both
    return strSplit === strSplitReverse
};

// Do not edit below this line
module.exports = palindromes;

//get array and erase spaces, commas and make it lowerCase
// compare full string with reversed one