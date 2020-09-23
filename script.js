function palindrome(str) {
    const text = "racecar";
    const alphaNumRegex = /^[a-z0-9]+$/i;
    const strArr = str.trim().split("");
    
    strArr.forEach((char, index) => {
        if(!alphaNumRegex.test(char) || char == " ") {
            strArr.splice(index, 1);
        }
    })  
    
    const isPalindromeAcc = [];
    const strArrLength = strArr.length - 1;
    for(let char = 0; char <= (strArrLength / 2); char++) {
        const isPalindrome = !!(strArr[char] == strArr[strArrLength - char]);
        isPalindromeAcc.push(isPalindrome);
    }
    
    return isPalindromeAcc.every(value => value == true);
}
console.log(palindrome("A man, a plan, a canal. Panama")); //Fix this stuff