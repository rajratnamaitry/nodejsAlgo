/*
* Time complexity: O(n)
* Space complexity: O(1)
*/
const countUniqueVal = (arr)=>{
    if(arr.length === 0) return 0;
    let i = 0;
    for(var j = 1 ; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i]=arr[j];
        }
    }
    return i+1;
}
console.log(countUniqueVal([1,1,1,1,2]))