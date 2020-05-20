// Given an array and a chunk size, 
// divide the array into many sub-arrays where each sub-array has the specified length


/* 
const chunkArray = (arr, n) => {
    let result = [];

    for(let item of arr) {
        let lastArray = result[result.length-1];

        if (!lastArray || lastArray.length === n) {
            result.push([item]);
        } else {
            lastArray.push(item);
        }
    }
    
    console.log(result);
    
}

chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
 */

const chunk = (arr, size)=> {
    const chunked_arr = [];
    let copied = [...arr]; 
    const numOfChild = Math.ceil(copied.length / size); 

    for (let i = 0; i < numOfChild; i++) {
        console.log(chunked_arr);
        console.log(copied);

      chunked_arr.push(copied.splice(0, size));
    }
    console.log(chunked_arr);
  }

  chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);

  // run with "node chunkArray.js" in commandline
