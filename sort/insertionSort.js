module.exports.insertionSort = (arr)=>{
    for(var i = 1; i < arr.length ; i++){
        var currentIndex = i;
        while(arr[currentIndex -1] != undefined && arr[currentIndex - 1] > arr[currentIndex] ){
            [arr[currentIndex - 1],arr[currentIndex]] = [arr[currentIndex],arr[currentIndex-1]];
            currentIndex -= 1;
        }
    }
}