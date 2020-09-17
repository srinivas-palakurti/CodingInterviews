// check a given 2 strings or one edit away from being equal
// one character replacing or removal or adding

const charMap = (str) => {
    let obj = {};

    for (const charVal of str) {
        (!obj[charVal])?obj[charVal]=1:obj[charVal]++;
    }
    return obj;
}

const oneEditAway = (str1, str2) => {

    // if 2 strings are same
    if (str1 === str2) {
        return false;
    }

    // if 2 strings are different 
    const obj1 = charMap(str1);
    const obj2 = charMap(str2);
    let counter = 0;

    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) {
            counter++;
        } else if (counter >= 2) {
            return false;
        }
    }
    return true;
}

console.log(
    {
        isOneEditAway: oneEditAway("magic", "music")
    },
    {
        isOneEditAway: oneEditAway("peice", "peace")
    },
    {
        isOneEditAway: oneEditAway("sample", "sample")
    }
);