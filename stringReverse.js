
// Reverse string by using an array
/* const revString = (str) => {
    const arr = str.split("");
    console.log(arr);
    arr.reverse();

    str = arr.join("");
    console.log(str);
}

revString("Hello"); */

// Reverse string by using an for loop and assign each charater to an empty String
(function(str) {
    let reverseStr = '';
    for (const character of str) {
        reverseStr = character + reverseStr;
    }
    console.log({
        reversed_value: reverseStr
    })
    // console.log(reverseStr);

}) ("Hello")


// run with "node stringReverse.js" in commandline