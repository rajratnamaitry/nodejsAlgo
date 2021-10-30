/*
* Time complexity: O(n*2)
* Space complexity: O(1)
*/
const sumZero = (arr)=>{
    for(var i = 0 ; i < arr.length; i++){
        for(var j = i+1 ; j < arr.length; j++){
            if(arr[i]+arr[j]==0){
                return [arr[i],arr[j]]
            }
        }    
    }
}
/*
* Time complexity: O(n)
* Space complexity: O(1)
*/
const sumZeroRefector = (arr) =>{
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        const sum = arr[left] + arr[right];
        if(sum == 0){
            return [arr[left],arr[right]]
        }
        if(sum > 0){
            right--;
        }else {
            left++;
        }   
    }
}
console.log(sumZero([-4,-3,-2,-1,0,1,2,5]))