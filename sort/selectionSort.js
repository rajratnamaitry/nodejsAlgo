module.exports.selectionSort = (arr)=>{
    for(var i = 0; i < arr.length;i++){
        var low = i;
        for(var j = i+1; j < arr.length; j++){
            if(arr[low] > arr[j]){
                low = j;
            }
        }
        if(low !==i){
            [arr[i],arr[low]] = [arr[low],arr[i]]
        }
    }
}
