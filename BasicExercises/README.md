# Câu hỏi JavaScript căn bản

## Mục lục
* [Câu 1. Phân biệt settimeout và setinterval](#câu-1-phân-biệt-settimeout-và-setinterval)
* [Câu 2. Phân biệt callback, promise, async await]()
* [Câu 3. Callback hell là gì?]
* [Câu 4. Promise hell là gì?]
* [Câu 5. Phân biệt let và const, trường hợp Object thì làm thế nào?]
* [Câu 6. Sự khác nhau giữa forEach, filter, every, some, reduce, for thường]
* [Câu 7. Các phương pháp clone object]
* [Câu 8. Phân biệt giá trị và địa chỉ của biến]
* [Câu 9. JavaScript có bao nhiêu kiểu giữ liệu]
* [Câu 10. Làm thế nào để kiểm trả object có empty hay không?]
* [Câu 11. Các phương pháp để nối hai mảng]
* [Câu 12. Arrow fuction là gì, so sánh arrow funtion và express function]
* [Câu 13. Spread operator dùng để làm gì?]
* [Câu 14. Con trỏ this là gì, phân biệt call, bind, apply]
* [Câu 15. NodeJS là single thread hay multiple thread?]

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


	Hãy phân tích đoạn code trên: <br>
	Một promise được khởi tạo với một function có câu lệnh resolve hoặc reject.
	Đặt đoạn code bất đồng bộ trong function Promise resolve khi mọi thứ xảy ra như mong muốn Nếu không thì reject
	Khi resolve được chạy thì đoạn code trong .then sẽ thực thi Khi reject được chạy thì .catch sẽ được trigger <br><br>

- Async sẽ thông báo rằng function sẽ xử lý bất đồng bộ, và await sẽ được dùng để báo chúng ta muốn đợi kết quả của thao tác bất đồng bộ trong một function có đánh dấu async.
    
