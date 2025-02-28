const curry = (fn, arity) => {
  const funcInner = (n, args) => {
    return (a) => {
      if (n <= 1) {
        return fn(...args, a);
      }
      return funcInner(n - 1, [...args, a]);
    };
  };
  return funcInner(arity, []);
}
  
  
  
  // usage
  function sum(a, b, c, d) {
    return a + b + c + d;
  }
  
  let curriedSum = curry(sum, 4);
  
  console.log( curriedSum(1)(2)(3)(4));

//******************************************
function infiateCurry(a) {
  return function(b) {
    if(!b) {
      return a
    } else {
      infiateCurry(a+b)
    }
  }
}

// const summing = x => y => !!y ? summing(x + y) : x;
//******************************************


 /*  const curry = function(fn) {
    return function(...args) {
    return fn.bind(null, ...args);
    }
    }
    
    function sum(a, b, c) {
    return a + b + c;
    }
    
    let curriedSum = curry(sum);
    
    console.log( curriedSum(1)(2)(3) ); */


    // const summing= x => y => !!y ? summing(x + y) : x;

    // console.log( summing(1)(2)(3)(4));
