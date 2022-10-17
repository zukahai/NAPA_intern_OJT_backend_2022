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
	Hãy phân tích đoạn code trên: <br>
	Một promise được khởi tạo với một function có câu lệnh resolve hoặc reject.
	Đặt đoạn code bất đồng bộ trong function Promise resolve khi mọi thứ xảy ra như mong muốn Nếu không thì reject
	Khi resolve được chạy thì đoạn code trong .then sẽ thực thi Khi reject được chạy thì .catch sẽ được trigger <br><br>

- Async sẽ thông báo rằng function sẽ xử lý bất đồng bộ, và await sẽ được dùng để báo chúng ta muốn đợi kết quả của thao tác bất đồng bộ trong một function có đánh dấu async.
    
