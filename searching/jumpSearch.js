/**
 * 
 * @param {* []} inputArray 
 * @param {*} value 
 * @returns {number}
 */

/**
 *  1. find jump index using square root of array length
 *  2. set start index 0 and end index jump index
 *  3. check seek value  greater inputArray if yes then increatment endIndex +jumpindex
 *  4. check linear search 
 */

module.exports.jumpSearch = (inputArray,value)=>{ 
 const jumpSize = Math.floor(Math.sqrt(inputArray.length));
 let startIndex = 0;
 let endIndex = jumpSize;
 while(value > inputArray[Math.min(endIndex,inputArray.length)-1]){
    startIndex =  endIndex;
    endIndex += jumpSize;
    if(startIndex > inputArray.length){
        return -1;
    }
 }
 let currentIndex = startIndex;
 while(value <= inputArray[Math.min(endIndex,inputArray.length)-1]){
    if(value== inputArray[currentIndex]){
        return currentIndex;
    }
    if(!inputArray[currentIndex]){
        return -1;
    }
    currentIndex +=1;
 }
 return -1
}