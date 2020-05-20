
//is given two strings are having same characters and it's charater count
const convertStrToMap = (str) => {
    let obj = {};

    for (const charVal of str) {
        !obj[charVal] ? obj[charVal] = 1 : obj[charVal]++
    }
    return obj;
}

const isPermutation = (str1, str2) => {
    if (str1 === str2) {
        return true;
    } else {
        if (str1.length !== str2.length) {
            return false;
        } else {
            let map1 = convertStrToMap(str1);
            let map2 = convertStrToMap(str2);

            for (const key in map1) {
                // console.log(key);
                // console.log(map1[key] + "===>" + map2[key]);
                if (map1[key] !== map2[key]) {
                    return false;                    
                }
            }
        }
    }

    return true;
}

console.log(
    {
        isPermutationString: isPermutation("sample", "hello")
    },
    {
        isPermutationString: isPermutation("testing", "tingtes")
    },
    {
        isPermutationString: isPermutation("moon", "moon")
    },
    {
        isPermutationString: isPermutation("testing", "testings")
    }
)

// run with "node permutation.js" in commandline