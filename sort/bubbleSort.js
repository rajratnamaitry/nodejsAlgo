module.exports.bubbleSort = (inputArray)=>{
    for(var i = 0; i < inputArray.length;i++){
        for(var j = i+1; j < inputArray.length;j++){
            if(inputArray[i] > inputArray[j]){
                [inputArray[i] , inputArray[j]] = [inputArray[j] , inputArray[i]] 
            }
        }   
    }
    return inputArray
}