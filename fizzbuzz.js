// Write a program that prints the numbers from 1 to 100. 
// But for multiples of three print "Fizz" instead of the number 
// and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz"

(function(num) {
    for (let index = 1; index <= num; index++) {

        if (index%3 === 0 && index%5 === 0) {
            console.log("FizzBuzz");
            ++index;
        }

        if (index%5 === 0) {
            console.log("Buzz");
            ++index;
        }
        
        if (index%3 === 0) {
            console.log("Fizz");
            ++index;
        }

        if (index > num) {
            break;
        } else {
            console.log(index);
        }
    }
    
})(36)

// run with "node fizzbuzz.js" in commandline