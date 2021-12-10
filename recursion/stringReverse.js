const stringReverse = (str) =>{
    if(str.length == 0) return str;
    return stringReverse(str.slice(1))+ str[0]
}

console.log(stringReverse('awesome')) // 'emosewa'