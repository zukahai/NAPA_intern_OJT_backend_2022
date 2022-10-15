let greeting = "say Hi";
let times = 4;

if (times > 3) {
    let hello = "say Hello instead";
    console.log(hello); // "say Hello instead"
}
console.log(hello); // hello is not defined


const greeting = "say Hi";
greeting = "say Hello instead"; // error : Assignment to constant variable. 

const greeting = "say Hi";
const greeting = "say Hello instead"; // error : Identifier 'greeting' has already been declared



const greeting = {
    message: "Hello",
    number: "five"
}

greeting.message = "say Hello instead";
console.log(greeting); // {message:"say Hello instead",number:"five"}