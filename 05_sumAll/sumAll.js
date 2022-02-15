const sumAll = function(firstNum,secondNum) {
    if ((firstNum*secondNum<0)||!Number.isInteger(firstNum)
    ||!Number.isInteger(secondNum)){
        return "ERROR"
    }
    if (firstNum>secondNum){
        upperNum=firstNum;
        lowerNum=secondNum;
    } else if (firstNum<secondNum){
        upperNum=secondNum;
        lowerNum=firstNum;
    } else{
        return "ERROR"
    }

    let sum=lowerNum;
    for (num=upperNum;num>lowerNum;num--){
        sum+=num
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
