// reverse an integer value 

const reverseNum = (num) => {
    const reverseVal = (num < 0 ? -1*(parseInt(num.toString().split("").reverse().join(""))) : 
                                        (parseInt(num.toString().split("").reverse().join(""))));

    console.log("%d reversed to %d", num, reverseVal);
} 

reverseNum(51);
reverseNum(500);
reverseNum(-48);
reverseNum(-300);


// run with "node numberReverse.js" in commandline