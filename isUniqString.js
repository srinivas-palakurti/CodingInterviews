// check if string all unique characters (not repeating any of the character in given String)

const isUniqFunc = (str) => {
    let obj = {}
    for (const charVal of str) {
        (!obj[charVal] ? obj[charVal] = 1 : obj[charVal]++);
    }

    // console.log(obj);
    for (const i in obj) {
        if (obj[i] > 1) {
            return false;
        }
    }

    return true;
}

console.log(
    {
        isUniq: isUniqFunc("sample")
    },
    {
        isUniq: isUniqFunc("testing")
    }
);


// run with "node isUniqString.js" in commandline