const isPalindrome = (str)=>{
    if(str.length == 0) return true;
    if(str.length == 2) return str[1] == str[2];
    if(str[0] == str.slice(-1)) return isPalindrome(str.slice(1,-1));
    return false;
}

console.log(isPalindrome('tacocat'))
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false)