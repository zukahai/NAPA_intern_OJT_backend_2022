# Câu hỏi JavaScript căn bản

## Mục lục
* [Câu 1. Delay setTimeout](#câu-1-delay-settimeout)
* [Câu 2. Tối ưu 20 sự kiện bất đồng bộ](#câu-2-tối-ưu-20-sự-kiện-bất-đồng-bộ)
* [Câu 3. Vấn đề của event loop]
* [Câu 4. Promise hell là gì?]
* [Câu 5. Phân biệt let và const, trường hợp Object thì làm thế nào?]
* [Câu 6. Sự khác nhau giữa forEach, filter, every, some, reduce, for thường]
* [Câu 7. Các phương pháp clone object]
* [Câu 8. Phân biệt giá trị và địa chỉ của biến]
* [Câu 9. JavaScript có bao nhiêu kiểu giữ liệu]

## Câu trả lời

### Câu 1. Delay setTimeout
Viết hàm sleep(time) để delay chương trình time mili giây

```JavaScript
setTimeout(() => {
	console.log('hello event loop');
}, 0);

function sleep(milliseconds) {
	const date = Date.now();
	let currentDate = null;
	do {
		currentDate = Date.now();
	} while (currentDate - date < milliseconds);
}

sleep(5000)
```

### Câu 2. Tối ưu 20 sự kiện bất đồng bộ
Ý tưởng: tạo ra 4 promise, mỗi promise xử lý 5 eventAsynchronous <br>
Sau đó dùng Promise.all để xử lý 4 promise đó <br>
Tạo một function để khởi tạo promise có thời gian chạy truyền vào<br>
```JavaScript
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
```
Tạo ra 4 mản chứa 5 promise mỗi mảng
```JavaScript
const arrPromise = [];

for (let i = 0; i < 4; i++) {
    arrPromise[i] = [];
}

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 4; j++) {
        arrPromise[j].push(eventPromise(Math.floor(Math.random() * 4000)));
    }
}
```
Xử lý 4 promise đó bằng Promise.all nếu có
```JavaScript
for (let i = 0; i < 4; i++) {
    Promise.all(arrPromise[i]).then((result) => {
        console.log(result);
    });
}
```

### Câu 3. Vấn đề của event loop
```JavaScript
const controller = async (req, res) => {
    +) func doA là đồng bộ, thời gian thực thi 10s
    doA();
 
    +)func doB là bất đồng bộ, thời gian thực thi là 1s
    +) là một lời gọi IO, chẳng hạn như truy vấn database
    await doB();
    res.status(200).end();
}
```
Hàm await  sẽ được đẩy vào hàng đợi của event loop
- Request đầu tiên sẽ chạy trong 11 giây do chạy doA() hết 10 giây và chờ 1 giây await chạy doB() trong hàng đợi
- Có 3 Request nên hàm await cuối phần chờ await của 2 request đó chạy nữa, thời gian là:
	- 10 giây của doA()
	- 2 giây chờ hàng đợi
	- 1 giây doB()
- Tương tự request thứ 2 sẽ thực hiện trong 12 giây, trung bình 3 request thực hiện trong (11 + 12 + 13) / 3 = 12 giây

Cách giải quyết:
```JavaScript
const controller = async (req, res) => {
    new Promise((resolve) => {
        doA();
        resolve();
    });
    await doB();
};
```
