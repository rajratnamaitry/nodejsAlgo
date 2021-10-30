/*
* Time complexity: O(n)
*/
const maxSubArraySum = (arr, num)=>{
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    for(var i = 0; i < num ; i++){
        maxSum +=arr[i]
    }
    tempSum = maxSum;
    for(var i = num ; i < arr.length ; i++){
        tempSum = tempSum - arr[i-num] + arr[i]
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
}
console.log(maxSubArraySum([4,2,1,6,2],4))