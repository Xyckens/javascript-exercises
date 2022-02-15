const reverseString = function(string) {
    const arrayFromString=string.split("");

    const reverseArray=arrayFromString.reverse();
    const reverseString=reverseArray.join("");

    return reverseString
};

// Do not edit below this line
module.exports = reverseString;
