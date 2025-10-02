function right(str) {
    return str.length >= 3 
        ? str.slice(-3) + str.slice(0, str.length - 3) 
        : str;
}

console.log(right("Python"));     
console.log(right("JavaScript")); 
console.log(right("Go"));   