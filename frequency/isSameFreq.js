const isSameFreq = (num1,num2)=>{
    const arr1 = num1.toString().split('');
    const arr2 = num2.toString().split('');
    const freq1 = {};
    const freq2 = {};
    if(arr1.length != arr2.length) return false;
    for(const val of arr1){
        freq1[val] = (freq1[val] || 0) + 1;
    }
    for(const val of arr2){
        freq2[val] = (freq2[val] || 0) + 1;
    }
    for(const val of arr1){
        if(!(val in freq2)){
            return false;
        }
        if(freq1[val] !== freq2[val]){
            return false;
        }
    }
    return true;
}
console.log(isSameFreq(192,291))