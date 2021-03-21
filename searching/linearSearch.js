const { logger } = require("../utility/helper");
/**
 * Worst complexity: O(n)
 * Average complexity: O(n)
 * Space complexity: O(1)
 * Worst-case space complexity: O(1) iterative
 * Average performance: O(n/2)
 */

/**
 * 
 * @param {* []} inputArray 
 * @param {*} value 
 * @returns {number}
 */
 module.exports.linearSearch = (inputArray,value)=>{ 
    logger('start', 'linear Search');
    for(var i = 0 ; i < inputArray.length ; i++) {
        if(inputArray[i]==value){
            return i;
        }
    };
    return -1;
 }