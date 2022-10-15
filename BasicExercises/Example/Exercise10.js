const a = {},
    b = { x: 1 },
    c = { m: "a", n: "b" };

console.log(Object.keys(a)); // []
console.log(Object.keys(b)); // ["x"]
console.log(Object.keys(c)); // ["m", "n"]


const isEmpty = (v) => {
    return Object.keys(v).length === 0;
};