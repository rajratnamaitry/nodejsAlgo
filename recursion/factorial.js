function factorialLop(num){
    let fact = 1;
    for(let i = num; i > 0; i--){
        fact *= i;
    }
    return fact;
}
function factorial(num){
    if (num == 1) return 1;
    return num * factorial(num - 1);

}
console.log(factorial(5))