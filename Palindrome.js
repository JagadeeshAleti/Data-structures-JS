// Palindrome
function checkPalindrome(number) {
    return number < 0 ? false : (number === +number.toString().split("").reverse().join(""));
}

console.log(checkPalindrome(121));
console.log(checkPalindrome(-121));