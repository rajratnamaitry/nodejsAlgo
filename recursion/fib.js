function fib(n){
    if(n<= 2) return 1;
    return fib(n-2)+ fib(n-1);
}
function fibWithMem(n , memo = []){
    if(memo[n] !== undefined) return memo[n];
    if(n <=2) return 1;
    const res = fib(n-2,memo) + fib(n-1,memo) 
    memo[n] == res;
    return res
};
console.log(fibWithMem(45))