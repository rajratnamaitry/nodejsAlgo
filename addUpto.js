/*
* Best complexity: O(1)
* Space complexity: O(1)
*/

const addUpTo =  (n)=>{
 return n * (n + 1) / 2;
}

/*
* Best complexity: O(n)
* Space complexity: O(1)
*/
const addUpTo2 =  (n)=>{
    let total = 0;
    for(var i = 1; i <= n ; i++){
        total += i;
    }
    return i;
}