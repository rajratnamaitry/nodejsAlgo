const { logger } = require("../utility/helper");

module.exports.interpolationSearch = (inputArray,value)=>{ 
    let startIndex = 0 ;
    let endIndex = inputArray.length - 1;
    while (startIndex <= endIndex){
        const rangeDelta = inputArray[endIndex] - inputArray[startIndex];
        const indexDelta = endIndex - startIndex;
        const valueDelta = value - inputArray[startIndex];
        if(valueDelta < 0){
            return -1;
        }
        if(!rangeDelta){
            return inputArray[startIndex]== value ? startIndex : -1;
        }
        const middleIndex =  startIndex + Math.floor((valueDelta * indexDelta) / rangeDelta);
        if(inputArray[middleIndex]== value){
            return middleIndex;
        }
        if(inputArray[middleIndex] < value) {
            startIndex = middleIndex + 1
        } else {
            endIndex = middleIndex -1
        }
    }
    return -1
 
}

console.log(module.exports.interpolationSearch ([10, 20, 30, 40, 50],40))