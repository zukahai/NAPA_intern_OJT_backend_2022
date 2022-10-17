//Ý tưởng: tạo ra 4 promise, mỗi promise xử lý 5 eventAsynchronous
//Sau đó dùng Promise.all để xử lý 4 promise đó

// Tạo một function để khởi tạo promise có thời gian chạy truyền vào
const eventPromise = async (time) => {
    try {
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('This is event ' + time);
            }, time);
        });
        return result;
    } catch (error) {
        console.log(error);
    }
};
////Tạo ra 4 mản chứa 5 promise mỗi mảng

const arrPromise = [];

for (let i = 0; i < 4; i++) {
    arrPromise[i] = [];
}

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 4; j++) {
        arrPromise[j].push(eventPromise(Math.floor(Math.random() * 4000)));
    }
}
// //Xử lý 4 promise đó bằng Promise.all nếu có
for (let i = 0; i < 4; i++) {
    Promise.all(arrPromise[i]).then((result) => {
        console.log(result);
    });
}