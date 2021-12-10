function collectOddValues(arr){
    let result = [];
    function helper(hArr){
        if(hArr.length == 1){
            return 
        }
        if(hArr[0] % 2 !== 0){
            result.push(hArr[0]);
        }
        helper(hArr.slice(1))
    }
    helper(arr)
    return result;
}
console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))