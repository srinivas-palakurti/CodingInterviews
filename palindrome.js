// What is Palidrome ?
// Palindrome is a String when it is same as reversed value of same string

const isPalindrome = (str) => {
    const reversedString = str.split("").reverse().join("");

    console.log("%s is Palindrome?, %s", str, str === reversedString);
}

isPalindrome("abba");
isPalindrome("Hello");
isPalindrome("srinivasavinirs");


// run with "node palindrome.js" in commandline