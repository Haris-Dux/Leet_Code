

// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
let number = 10;
const createCounter = () => {
    return function(){
        return number ++;
    }
};

const result = createCounter();

console.log(result()); // Output: 10
