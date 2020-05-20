

// const sum = (a) => {
//     return (b) => {
//         return b? sum(a+b):a;
        
//         // console.log(a);
//         // return a;
//     }
// }

const sum = a => b => {
    return b?sum(a+b):a
} 

console.log(sum(1)(2)(3)(4)(5)(6)(7)(8)(9));