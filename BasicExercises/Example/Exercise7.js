//Sử dụng Spread (nhóm Shallow Copy)

const obj_1 = {
    username: "HaiZuka",
    getUsername() {
        return this.username;
    }
};

const obj_2 = {...obj_1 };

obj_1.username = "10";

console.log("obj_2", obj_2); // {username: "HaiZuka", getUsername: ƒ}



//Sử dụng Object.assign() (nhóm Shallow Copy)

const obj_1 = {
    username: "haizuka.com",
    info: {
        address: "https://haizuka.com"
    },
    getUsername() {
        return this.username;
    }
};

const obj_3 = Object.assign({}, obj_1);

obj_1.age = 10;

console.log("obj_3", obj_3); // {username: "haizuka.com", info: {address: "https://haizuka.com"}, getUsername: ƒ}



// Sử dụng phương thức JSON (nhóm Deep Clone)
const obj_1 = {
    username: "haizuka.com",
    info: {
        address: "https://haizuka.com"
    },
    getUsername() {
        return this.username;
    }
};

const obj_4 = JSON.parse(JSON.stringify(obj_1));

obj_1.age = 10;

console.log("obj_4", obj_4); // {username: "haizuka.com", info: {address: "https://haizuka.com"}}




//Sử dụng thư viện bên thứ 3 – Lodash (nhóm Deep Clone)
const _ = require("lodash");

const obj_1 = {
    username: "haizuka.com",
    info: {
        address: "https://haizuka.com"
    },
    getUsername() {
        return this.username;
    }
};

const obj_5 = _.cloneDeep(obj_1);
const obj_6 = _.clone(obj_1);

obj_1.age = 10;
obj_1.info.address = "Not found";

console.log("obj_5", obj_5); // {username: "haizuka.com", info: {address: "https://haizuka.com"}, getUsername: ƒ}
console.log("obj_6", obj_6); // {username: "haizuka.com", info: {address: "Not found"}, getUsername: ƒ}