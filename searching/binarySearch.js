const { logger } = require("../utility/helper");
/*
* Worst complexity: O(log n)
* Average complexity: O(log n)
* Best complexity: O(1)
* Space complexity: O(1)
*/
/**
 * 
 * @param {* []} inputArray 
 * @param {*} value 
 * @returns {number}
 */
function binarySearch(inputArray,value){
    logger('start', 'binary Search');
    let startIndex = 0;
    let endIndex = inputArray.length-1;
    while(startIndex <= endIndex) {
        let middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
        logger(startIndex ,'startIndex');
        logger(endIndex ,'endIndex');
        logger(middleIndex,'middleIndex');
        if(inputArray[middleIndex] == value){
            return middleIndex;
        }
        if(inputArray[middleIndex] < value){
            startIndex = middleIndex + 1; 
        }else{
            endIndex = middleIndex - 1; 
        }
    }
    return -1;
}
const inputArray = [1, 5, 10, 14, 17, 22, 100];
const index = binarySearch(inputArray,100);
if(index){
    logger(inputArray[index], 'final value')
}else {
    logger(' not found ');
}