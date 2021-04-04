/**
 * 
 * @param {*[]} inputArray 
 * @returns []
 */
module.exports.quickSort = (inputArray) =>{
    // clone array
    const array = [...inputArray];
    if(inputArray <= 1){
        return array;
    }
    const left = [];
    const right = [];
    // take first element as pivot
    const pivot = array.shift();
    const center = [pivot];
    while(array.length){
        const currentEl =  array.shift();
        if(currentEl==pivot){
            center.push(currentEl);
        }else if(currentEl < pivot){
            left.push(currentEl);
        }else {
            right.push(currentEl);
        }
    }
    const leftArray = module.exports.quickSort(left)
    const rightArray = module.exports.quickSort(right)
    return leftArray.concat(center,rightArray);
}