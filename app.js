// reverse string function

function reverseStr(str){
    return str.split('').reverse().join('');

}

// palindrome check function

function isPalindrome(str){
   (str === reverseStr(str));
}
