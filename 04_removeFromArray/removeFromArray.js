
const removeFromArray = function(array,...values) {

    for (let i=0;i<values.length;i++){

        index=array.indexOf(values[i]);

        if (index!=-1){

            array.splice(index,1);
        };
    }    
    return array
};


// Do not edit below this line
module.exports = removeFromArray;
