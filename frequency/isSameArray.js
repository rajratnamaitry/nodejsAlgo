const isSameArray = (arr1, arr2) =>{
    if(arr1.length != arr2.length) return false;
    const freq1 = {};
    const freq2 = {};
    for(const val of arr1){
        freq1[val] = (freq1[val] || 0) + 1; 
    }
    for(const val of arr2){
        freq2[val] = (freq2[val] || 0) + 1; 
    }
    for(const val of arr1){
        if(!(val in freq2)){
            return false
        }
        if(freq1[val] != freq2[val]){
            return false;
        }
    }
    return true;
}

const isSameArraySeq = (arr1, arr2) =>{
    if(arr1.length != arr2.length) return false;
    const freq1 = {};
    const freq2 = {};
    for(const val of arr1){
        freq1[val] = (freq1[val] || 0) + 1; 
    }
    for(const val of arr2){
        freq2[val] = (freq2[val] || 0) + 1; 
    }
    for(const val of arr1){
        if(!(val**2 in freq2)){
            return false
        }
        if(freq1[val] != freq2[val**2]){
            return false;
        }
    }
    return true;
}
console.log(isSameArray([1,2,3,4], [1,2,4,3]))