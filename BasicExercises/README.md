# Câu hỏi JavaScript căn bản

## Mục lục
* [Câu 1. Phân biệt settimeout và setinterval](#câu-1-phân-biệt-settimeout-và-setinterval)
* [Câu 2. Phân biệt callback, promise, async await](#câu2-phân-biệt-callback-promise-async-await)
* [Câu 3. Callback hell là gì?](#câu-3-callback-hell-là-gì)
* [Câu 4. Promise hell là gì?](#câu-4-promise-hell-là-gì)
* [Câu 5. Phân biệt let và const, trường hợp Object thì làm thế nào?](#câu-5-phân-biệt-let-và-const-trường-hợp-object-thì-làm-thế-nào)
* [Câu 6. Sự khác nhau giữa forEach, filter, every, some, reduce, for thường](#câu-6-sự-khác-nhau-giữa-foreach-filter-every-some-reduce-for-thường)
* [Câu 7. Các phương pháp clone object](#câu-7-các-phương-pháp-clone-object)
* [Câu 8. Phân biệt giá trị và địa chỉ của biến](#câu-8-phân-biệt-giá-trị-và-địa-chỉ-của-biến)
* [Câu 9. JavaScript có bao nhiêu kiểu giữ liệu](#câu-9-javascript-có-bao-nhiêu-kiểu-giữ-liệu)
* [Câu 10. Làm thế nào để kiểm trả object có empty hay không?](#câu-10-làm-thế-nào-để-kiểm-trả-object-có-empty-hay-không)
* [Câu 11. Các phương pháp để nối hai mảng](#câu-11-các-phương-pháp-để-nối-hai-mảng)
* [Câu 12. Arrow fuction là gì, so sánh arrow funtion và express function](#câu-12-arrow-fuction-là-gì-so-sánh-arrow-funtion-và-express-function)
* [Câu 13. Spread operator dùng để làm gì?](#câu-13-spread-operator-dùng-để-làm-gì)
* [Câu 14. Con trỏ this là gì, phân biệt call, bind, apply](#câu-14-con-trỏ-this-là-gì-phân-biệt-call-bind-apply)
* [Câu 15. NodeJS là single thread hay multiple thread?](#câu-15-nodejs-là-single-thread-hay-multiple-thread)

## Câu trả lời

### Câu 1. Phân biệt settimeout và setinterval
- Hàm setTimeout() thường được sử dụng khi mình muốn thực hiện method sau khoảng thời gian nào đó (mili giây)
    ```JavaScript
    setTimeout ( expression, timeout );
    ```
    Ví dụ khi load trang thì sau 1000 mili giây sẽ in ra chữ “Hello”
    ```JavaScript
    setTimeout(() => {
      console.log("Hello")
    }, 1000);
    ```
- Hàm setinterval sẽ dùng khi mình muốn thực hiện method liên tục sau khoảng thời gian chờ nào đó.
    ```JavaScript
    setInterval ( expression, time );
    ```
    Như cú pháp trên thì expression sẽ được thực hiện sau mỗi time (mili giây)
    ```JavaScript
      setInterval(() => {
          console.log("Bye")
      }, 2000)
    ```
    Ví dụ sao khi load trang 2 giây sẽ in ra chữ “Bye”, và cứ sau 2 giây lại in ra chữ “Bye”.

### Câu2: Phân biệt callback, promise, async await
Điểm chung là đều dùng để sử lí bất đồng bộ
- Callback là một function được gọi ra khi một thao tác bất đồng bộ có kết quả đã sẵn sàng (kết quả này có thể là dữ liệu trả về hoặc lỗi xảy ra khi thao tác)
Callback thường được sử dụng nhiều trong Jquery: <br>
	```JavaScript
	$("#button").click(function() {
		alert("Click")
	})
    ```
	Thì hàm callback là:
	```JavaScript
	function() {
		alert("Click")
	}
    ```
- Promíe nó có cú pháp rõ ràng hơn
	```JavaScript
	const myPromise = new Promise(function(resolve, reject) {
		// code here
		if (codeIsFine) {
			resolve('fine')
		} else {
			reject('error')
		}
	})

	myPromise
		.then(function whenOk(response) {
			console.log(response)
			return response
		})
		.catch(function notOk(err) {
			console.error(err)
	})
    ```
	Phân tích đoạn code trên: <br>
	Một promise được khởi tạo với một function có câu lệnh resolve hoặc reject.
	Đặt đoạn code bất đồng bộ trong function Promise resolve khi mọi thứ xảy ra như mong muốn Nếu không thì reject
	Khi resolve được chạy thì đoạn code trong .then sẽ thực thi Khi reject được chạy thì .catch sẽ được trigger <br><br>

- Async sẽ thông báo rằng function sẽ xử lý bất đồng bộ, và await sẽ được dùng để báo chúng ta muốn đợi kết quả của thao tác bất đồng bộ trong một function có đánh dấu async.
    
    
### Câu 3: Callback hell là gì?
- Callback hell kiểu như đã là mình gọi callback quá nhiều lần, sẽ làm code bị xấu. Ví dụ: <br>
	```JavaScript
	const animateAll = (animate) => {
	setTimeout(() => {
	    animate(words[0]);
	    setTimeout(() => {
		animate(words[1]);
		setTimeout(() => {
		    animate(words[2]);
		}, 1000)
	    }, 1000)
	}, 1000)
    }

    ```
- Làm thế nào để thoát khỏi callback hell?<br>
	•	JavaScript cung cấp một cách dễ dàng để thoát khỏi callback hell. Điều này được thực hiện bởi hàng đợi sự kiện (event queue) và các promise.<br>
•	Một promise là một đối tượng (object) được trả về (return) từ bất kỳ hàm không đồng bộ (asynchronous function) nào, mà các hàm callback (callback function) có thể được thêm vào dựa trên kết quả của hàm trước đó.<br>
•	Promise sử dụng phương thức (method) .then() để gọi các callback không đồng bộ (async callback). Chúng ta có thể nối (chain) bao nhiêu callback tùy thích và thứ tự (order) cũng được duy trì nghiêm ngặt.<br>
•	Promise sử dụng phương thức .fetch() để tìm nạp một đối tượng từ mạng (network). Nó cũng sử dụng phương thức .catch() để bắt (catch) bất kỳ ngoại lệ (exception) nào khi bất kỳ khối (block) nào bị lỗi.<br>
•	Vì vậy, những promise này được đưa vào hàng đợi sự kiện để chúng không chặn (block) mã JS tiếp theo. Ngoài ra khi kết quả được trả về, hàng đợi sự kiện sẽ kết thúc hoạt động của nó.<br>
•	Ngoài ra còn có các từ khóa (keyword) và phương thức hữu ích khác như async, wait, settimeout() để đơn giản hóa và sử dụng tốt hơn các callback<br>

### Câu 4. Promise hell là gì?
- Tuy nói Promise giúp tổ chức code, và tránh callback hell, nhưng nếu viết code không khô thoáng và sạch sẽ thì anh em vẫn rơi vào Promise Hell. Do đó lúc nào chúng ta cũng phải dùng kotexcode.
	Promise Hell<br>
	```JavaScript
	funA()
	    .then(function(tien) {
		return funB(tien)
		    .then(function(tien_con_lai) {
			return funC(tien_con_lai)
			    .then(function() {
				return hue_oi();
			    })
		    })
	    })

    ```
	Viết lại thành Kotexcode<br>
	```JavaScript
	funA()
	    .then(funB)
	    .then(funC)
	    .catch(console.error.bind(console));

    ```
### Câu 5. Phân biệt let và const, trường hợp Object thì làm thế nào?
- Một trong những nguyên nhân khiến let có thể thay thế var để xử lý vấn đề nêu trên là vì biến let được khai báo sẽ có scope là block scoped chứ không phải globally hay locally scoped.<br>
	```JavaScript
	let greeting = "say Hi";
	let times = 4;

	if (times > 3) {
	    let hello = "say Hello instead";
	    console.log(hello); // "say Hello instead"
	}
	console.log(hello); // hello is not defined

    ```
- Tương tự với let cũng có scope là block scoped, và hoisting thì chúng ta có thêm 1 kiểu khai báo biến nữa là const. Trong biến const nếu trường hợp kiểu của biến là primitive (bao gồm string, number, boolean, null, và undefined) thì chúng ta sẽ không thể tái khai báo hay cập nhật giá trị mới để thay thế cho giá trị trước đó của biến.<br>
	```JavaScript
	const greeting = "say Hi";
	greeting = "say Hello instead"; // error : Assignment to constant variable. 

	const greeting = "say Hi";
	const greeting = "say Hello instead"; // error : Identifier 'greeting' has already been declared
	
    ```
- Đối với trường hợp kiểu biến là reference (bao gồm object, array, và function) thì tuy không thể tái khai báo hay cập nhật giá trị của biến nhưng chúng ta vẫn có thể cập nhật giá trị cho thuộc tính của biến đó.<br>
	```JavaScript
	const greeting = {
	    message : "Hello",
	    number : "five"
	}

	greeting.message = "say Hello instead";
	console.log(greeting); // {message:"say Hello instead",number:"five"}

    ```
### Câu 6. Sự khác nhau giữa forEach, filter, every, some, reduce, for thường
- For thường: for thường sử dụng môt biến để chạy theo chỉ số trong một array, từ đó xác định được các phần tử trong mảng:<br>
	```JavaScript
	var array = [1, 2, 3];
	for (var i = 0; i < array.length; i++) {
	    console.log(i);
	}

    ```
- ForEach: For dùng để chạy lần lượt các phần tử trong một mảng, (đoạn này em không biết giải thích sau, kiểu nó giống như một list-linker, mỗi phần tử nó sẽ nối đến phần tử sau nó:<br> 
	```JavaScript
	var array = [1,2,3];
	array.forEach(function(i){
	  console.log(i);
	});

    ```
- Every: đây là một phương thức dành cho đối tượng mảng trong javascript. Công dụng của hàm này là giúp kiểm tra tất cả các phần tử trong mảng có thõa mãn một điều kiện nào đó hay không. Nếu tất cả phần tử đều thỏa thì sẽ trả về true, ngược lại nếu chỉ cần một phần tử không thỏa thôi là nó sẽ trả về false.<br><br>

- Some: Hàm some trong js có nhiệm vụ lặp qua tất cả các phần tử của mảng, mỗi lần lặp nó sẽ truyền giá trị của phần tử đang lặp vào hàm callback. Chỉ cần hàm callback return true là hàm some sẽ return true. Ngược lại, nếu duyệt hết mảng mà không có return true nào thì hàm some sẽ return false.<br><br>

- Reduce: là một phương thức sẵn có được sử dụng để thực thi một hàm lên các phần tử của mảng (từ trái sang phải) với một biến tích lũy để thu về một giá trị duy nhất. Là một phương thức quan trọng hay sử dụng trong lập trình hàm.<br><br>
	```JavaScript
	const data = [5, 10, 15, 20, 25];

	const res = data.reduce((total,currentValue) => {
	  return total + currentValue;
	});

	console.log(res); // 75

    ```
- Filter: Hàm filter được tích hơp sẵn trong đối tượng mảng giống như hàm map trong javascript. Về cách thức hoạt động thì nó giống hàm map, nghĩa là nó sẽ có một tham số dạng function và function này sẽ xử lý cho mỗi lần lặp. Nếu function return true thì phần tử lần lặp đó được chấp nhận, ngược lại sẽ không được chấp nhận.<br>

	```JavaScript
	var numbers = [100, 200, 300, 400, 500];

	var selected_number = numbers.filter(function(value) {
	    if (value == 300) {
		return false;
	    }
	    return true;
	});

	console.log(selected_number); // 100, 200, 400, 500

    ```
### Câu 7. Các phương pháp clone object
- Sử dụng Spread (nhóm Shallow Copy):<br>
	```JavaScript
		const obj_1 = {
			username: "HaiZuka",
			getUsername() {
			return this.username;
			}
		};

		const obj_2 = {...obj_1 };

		obj_1.username = "10";

		console.log("obj_2", obj_2); // {username: "HaiZuka", getUsername: ƒ}
	 ```
- Sử dụng Object.assign() (nhóm Shallow Copy):
	```JavaScript
	const obj_1 = {
		username: "chamdev.com",
		info: {
			address: "https://chamdev.com"
		},
		getUsername() {
			return this.username;
		}
	};

	const obj_3 = Object.assign({}, obj_1);

	obj_1.age = 10;

	console.log("obj_2", obj_3); // {username: "haizuka.com", info: {address: "https://haizuka.com"}, getUsername: ƒ}
	```
 - Sử dụng phương thức JSON (nhóm Deep Clone)
	```JavaScript
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
	```
 - Sử dụng thư viện bên thứ 3 – Lodash (nhóm Deep Clone)
	```JavaScript
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
	console.log("obj_6", obj_6; // {username: "haizuka.com", info: {address: "Not found"}, getUsername: ƒ}
	```
### Câu 8. Phân biệt giá trị và địa chỉ của biến
- Địa chỉ dùng để chỉ vùng nhớ, nơi lưu trữ giá trị của biến, từ địa chỉ ta có thể thay đổi giá trị của biến đó, và địa chỉ này là duy nhất.
- Giá trị của biến là một con số, một chuỗi,… là thứ quan trọng nhất của biến, mình có thể thay đổi giá trị bằng nhiều cách, trong đó có thể dùng cách tác động lên địa chỉ của biến đó.

### Câu 9. JavaScript có bao nhiêu kiểu giữ liệu
JavaScript có 8 kiểu dữ liệu cơ bản
1.	Kiểu dữ liệu boolean (kiểu logic) <br>
		```JavaScript
		let isWebLoaded = true; // => Trang web đã được tải xong
		console.log(isWebLoaded); // true

		let isProgramRunning = false; // Chương trình đang không chạy
		console.log(isProgramRunning); // false
		```
2.	Kiểu dữ liệu null
		```JavaScript
		let language = null;
		console.log(language); // null
		```
3.	Kiểu dữ liệu undefined
		```JavaScript
		let language2 = undefined;
		console.log(language2); // undefined
		let language3;
		console.log(language3); // undefined
		```
4.	Kiểu dữ liệu number
		```JavaScript
		let n1 = 66; // số nguyên dương
		let n2 = -66; // số nguyên âm
		let n3 = 3.14; // số thực dương
		let n4 = -3.14; // số thực âm
		let n5 = 2e3; // => 2*10^3 = 2000
		let n6 = 2e-3; // => 2*10^(-3) = 0.002
		let n7 = 0xff; // số dạng hexa (hệ cơ số 16): 15*16 + 15 = 255
		let n8 = 067; // số dạng octa (hệ cơ số 8): 6*8 + 7 = 55
		let n9 = 0b11; // số dạng nhị phân (hệ cơ số 2): 1*2 + 1 = 3
		```
5.	Kiểu dữ liệu BigInt <br>
	Trong JavaScript, kiểu dữ liệu number không thể biểu diễn một số nguyên lớn hơn (2^53-1) (bằng 9007199254740991) và nhỏ hơn -(2^53-1).
	Với hầu hết các trường hợp, việc sử dụng kiểu dữ liệu number là quá đủ. Nhưng đôi khi, bạn vẫn cần biểu diễn và tính toán với những số nguyên cực kỳ lớn. Do đó, kiểu dữ liệu BigInt ra đời nhằm giải quyết vấn đề này.
	Để biểu diễn số nguyên với kiểu BigInt

		```JavaScript
		const reallyBigNumber = 12345678987654321012345678987654321n;
		console.log(reallyBigNumber); // 12345678987654321012345678987654321n
		```
6.	Kiểu dữ liệu string
		```JavaScript
		const msg1 = 'Đây là string dùng dấu nháy đơn';
		const msg2 = "Đây là string dùng dấu nháy kép";
		const msg3 = `Đây là string dùng dấu backtick`;
		const msg4 = '1 + 2 = ${1 + 2}';
		```
7.	Kiểu dữ liệu symbol <br>
		Symbol là một kiểu dữ liệu nguyên thủy dùng để tạo ra các giá trị duy nhất (unique value) và bất biến (immutable). Symbol thường được dùng làm key cho kiểu dữ liệu object sau đây.
		
8.	Kiểu dữ liệu object <br>
		Object là kiểu dữ liệu tham chiếu. Có thể hiểu object là một tập hợp gồm các cặp key - value (khóa - giá trị).
		
### Câu 10. Làm thế nào để kiểm trả object có empty hay không?
Để kiểm tra object là empty trong ES6, mình sử dụng phương thức Object.keys(). Phương thức này trả về một mảng chứa tất cả các thuộc tính enumerable của object.
Nếu kết quả trả về là mảng rỗng thì suy ra object đó không chứa thuộc tính enumerable nào.
Ví dụ sử dụng Object.keys():

```JavaScript
const a = {},
b = { x: 1 },
c = { m: "a", n: "b" };

console.log(Object.keys(a)); // []
console.log(Object.keys(b)); // ["x"]
console.log(Object.keys(c)); // ["m", "n"]
```
Mình có thể viết hàm kiểm tra object có empty hay không như sau:
```JavaScript
const isEmpty = (v) => {
    return Object.keys(v).length === 0;
};
```

### Câu 11. Các phương pháp để nối hai mảng
- Dùng hàm push <br>
	Thêm lần lượt các phần tử mảng kia và mảng cần ghép.
	```JavaScript
	const array1 = [1, 2, 3];
	const array2 = [4, 5, 6];

	for (const element of array2) {
		array1.push(element);
	}
	```
	Có thể dùng spread thay vì vòng for
	```JavaScript
	array1.push(...array2);
	```
- Sử dụng hàm concat
	```JavaScript
	const num1 = [1, 2, 3];
	const num2 = [4, 5, 6];
	const num3 = [7, 8, 9];

	const numbers = num1.concat(num2, num3);

	console.log(numbers);
	// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]
	```
- Sử dụng spread
	```JavaScript
	const concatenated = [...array1, ...array2];
	```
	
### Câu 12. Arrow fuction là gì, so sánh arrow funtion và express function
Arrow function hoạt động tương tự như Lambdas trong các ngôn ngữ khác như C # hay Python. Bằng cách sử dụng arrow function, chúng ta tránh được việc phải gõ từ khoá function, return và dấu ngoặc nhọn.
```JavaScript
// ES5 
var multiply = function(x, y) {
	return x * y;
}; 
 
// ES6 
var multiply = (x, y) => { return x * y };
```
Arrow function thường ngắn gọn hơn function
Với hàm số có 1 tham số, arrow function có thể bỏ qua cặp dấu ngoặc đơn.
```JavaScript
// Sử dụng arrow function
let greeting = name => {
    console.log(`Hello, my name is ${name}`);
}
greeting("Hai");
// => Hello, my name is Hai
```
Sử dụng map với arrow function:
```JavaScript
let arr = [1, 2, 3, 4];
let square2 = arr.map(e => e * e);
console.log(square2); // => [1, 4, 9, 16]
```
Arrow function không phù hợp làm method cho object
Chính vì arrow function không định nghĩa giá trị this của riêng nó, nên cũng không phù hợp là method cho object.
```JavaScript
let obj = {
    a: 1,
    b: () => console.log(this.a, this),
    c: function() {
        console.log(this.a, this);
    }
}

obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 1, Object {...}
```

### Câu 13. Spread operator dùng để làm gì?
Spread operator có cú pháp giống với rest paraterter tuy nhiên cả hai có ý nghĩa khác nhau. Rest paramter được sử dụng khi khai báo hàm, ngược lại spread operator được sử dụng trong các câu lệnh, biểu thức hoặc khi gọi hàm.

ES6 cung cấp một toán tử mới gọi là spread operator bao gồm ba dấu chấm (...). Spread operator cho phép bạn trải ra các phần tử của một đối tượng có thể lặp lại, chẳng hạn như một array, map hoặc set.

Trước khi ES6 được ra đời thì cách phổ biến để nối mảng là sử dụng phương thức concat() của một mảng với đối số truyền vào là những mảng khác sẽ được nối với mảng này: VD:
```JavaScript
var arr_1 = [1, 2, 3];
var arr_2 = [4, 5, 6];

arr_3 = arr_1.concat(arr_2);
console.log(arr_3); //  [1, 2, 3, 4, 5, 6]
```
Phía dưới là dùng spread operator
```JavaScript
const arr_1 = [1,3,5];
const arr_2 = [2,4,6, ...odd];
console.log(arr_2); // [ 2, 4, 6, 1, 3, 5 ]
```

### Câu 14. Con trỏ this là gì, phân biệt call, bind, apply
This đại diện cho đối tượng trong hàm, class, object
Khi thực thi fuction đó, nó sẽ có Property thischứa item của 1 Object đang gọi tới function này.
Ví dụ trong object:

```JavaScript
const Person = {
    ho: 'Phan',
    ten: 'Hai',
    ghepHoTen: function() {
        console.log('Họ và tên', this.ho + " " + this.ten);
    }
}
Person.ghepHoTen();
```
Call và apply có vẻ rất giống nhau---đều gọi 1 function với 1 giá trị this xác định mà mình gán cho, cùng với những arguments. Điều khác nhau duy nhất giữa 2 method này đó là arguments truyền vào call sẽ được đọc từng giá trị một, trong khi arguments truyền vào apply là 1 array
```JavaScript
function longerSummary(genre, year) {
    console.log(
        `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`
    )
}

longerSummary.call(book, 'dystopian', 1932); //"Brave New World was written by Aldous Huxley. It is a dystopian novel written in 1932."
longerSummary.apply(book, 'dystopian', 1932); //Uncaught TypeError: CreateListFromArrayLike called on non-object at <anonymous>:1:15
```
Hai method apply() và call() đều là 2 method gọi 1 lần. Tức là chỉ khi gọi 2 hàm này thì giá trị của this mới được gán mới, còn bản chất function đó không hề thay đổi chút nào. Tuy nhiên, đôi khi sẽ có lúc chúng ta muốn sử dụng 1 method nào đó nhiều lần trong code với this của method đó sẽ do bạn gán. thì lúc đó cần sử dụng bind() để tạo ra 1 function mới thỏa mãn yêu cầu trên.
```JavaScript
const braveNewWorldSummary = summary.bind(book)

braveNewWorldSummary() //"Brave New World was written by Aldous Huxley"
```

### Câu 15. NodeJS là single thread hay multiple thread?
NodeJS là single thread. <br>
NodeJS sẽ thực thi chỉ theo một luồng.
```JavaScript
const http = require('http')
function wait(millisec) {
    var now = new Date;
    while (new Date - now <= millisec) ;
}
http.createServer((req, res)=> {
    if (req.url === '/') {
        res.writeHead(200, {"Content-Type": 'text/html'});
        res.write('hello')
        res.end()
    }
    if (req.url === '/wait') {
        wait(5000)
        console.log('wait');
        res.writeHead(200, {"Content-Type": 'text/html'});
        res.write('Done>>>wait')
        res.end()
    }
    if (req.url === '/timeout') {
        setTimeout(()=> {
            res.writeHead(200, {"Content-Type": 'text/html'});
            res.write('Done>>>timeout')
            res.end()
        }, 5000)
        console.log('timeout');
    }
}).listen(3000, "127.0.0.1", function() {
    console.log('server start at http://127.0.0.1:3000')
})
```
Sau chạy server và chạy http://localhost:3000 lập tức in ra chữ “hello”.
Những nếu ta chạy lại và chạy http://localhost:3000/wait thì sẽ phải chờ 5 giây bởi hàm wait(), cùng lúc đó ta vào http://localhost:3000 thì nó vẫn loading do luồng nó đang chạy đang xử lí ở hàm wait(), chứng tỏ NodeJS là single thread.

