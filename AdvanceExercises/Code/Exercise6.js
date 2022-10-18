// const obj1 = {
//     name: 'Nguyen Van A',
//     age: 20,
// };
// const obj2 = Object.assign({}, obj1);
// obj1.name = "Nguyen Van B"
// console.log(obj2); //Object{name: 'Nguyen Van A', age: 20}



const obj1 = {
    name: 'Nguyen Van A',
    age: 20,
};

const obj2 =obj1
obj1.name = "Nguyen Van B"
console.log(obj2); //Object{name: 'Nguyen Van B', age: 20}