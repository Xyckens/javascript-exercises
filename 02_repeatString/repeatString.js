const repeatString = function(string,num) {
    const stringRepeated=[]
    if (num<0){
        return "ERROR"
    } else {
        for (let i=0; i<num; i++){
            stringRepeated.push(string)

        }
        return stringRepeated.join("")
    }
};

// Do not edit below this line
module.exports = repeatString;
