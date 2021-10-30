const isAnagram = (str1,str2)=>{
    const arr1 = str1.split('')
    const arr2 = str2.split('')
    if(arr1.length != arr2.length) return false;
    const freq1 = {}
    const freq2 = {}
    for (const val of arr1){
        freq1[val] =  (freq1[val] || 0) + 1
    }
    for (const val of arr2){
        freq2[val] =  (freq2[val] || 0) + 1
    }
    for(const val of arr1){
        if(!(val in freq1)){
            return false;
        }
        if(freq1[val]!=freq2[val]){
            return false;
        }
    }
    return true;
}
console.log(isAnagram('aax','axa'))