// find the character that appears the most and total number of times it appears

const maxCharCount = (str) => {
    let obj = {};

    for (const charVal of str) {
        (!obj[charVal]?obj[charVal]=1:obj[charVal]++)
    }
    console.log(obj);

    let maxCount = 0;
    let maxChar = '';
    for (const charVal in obj) {
        if (obj[charVal] > maxCount) {
            maxCount = obj[charVal];
            maxChar = charVal;
        }
    }

    console.log("%s has %s character %s times max", str, maxChar, maxCount);
}

maxCharCount("H$%ELL%$$$$ooL");


// run with "node maxCharCount.js" in commandline