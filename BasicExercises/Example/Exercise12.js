// (param1, param2, paramN) => expression 

// ES5 
var multiply = function(x, y) {
    return x * y;
};

// ES6 
var multiply = (x, y) => { return x * y };


// Sử dụng arrow function
let greeting = name => {
    console.log(`Hello, my name is ${name}`);
}
greeting("Hai");
// => Hello, my name is Hai



let arr = [1, 2, 3, 4];
let square2 = arr.map(e => e * e);
console.log(square2); // => [1, 4, 9, 16]



let obj = {
    a: 1,
    b: () => console.log(this.a, this),
    c: function() {
        console.log(this.a, this);
    }
}

obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 1, Object {...}