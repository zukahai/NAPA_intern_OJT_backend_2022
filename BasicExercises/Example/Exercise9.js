//Kiểu dữ liệu boolean (kiểu logic)
let isWebLoaded = true; // => Trang web đã được tải xong
console.log(isWebLoaded); // true

let isProgramRunning = false; // Chương trình đang không chạy
console.log(isProgramRunning); // false

//Kiểu dữ liệu null
let language = null;
console.log(language); // null

//Kiểu dữ liệu undefined
let language2 = undefined;
console.log(language2); // undefined
let language3;
console.log(language3); // undefined

//Kiểu dữ liệu number
let n1 = 66; // số nguyên dương
let n2 = -66; // số nguyên âm
let n3 = 3.14; // số thực dương
let n4 = -3.14; // số thực âm
let n5 = 2e3; // => 2*10^3 = 2000
let n6 = 2e-3; // => 2*10^(-3) = 0.002
let n7 = 0xff; // số dạng hexa (hệ cơ số 16): 15*16 + 15 = 255
let n8 = 067; // số dạng octa (hệ cơ số 8): 6*8 + 7 = 55
let n9 = 0b11; // số dạng nhị phân (hệ cơ số 2): 1*2 + 1 = 3

//Kiểu dữ liệu BigInt
const reallyBigNumber = 12345678987654321012345678987654321 n;
console.log(reallyBigNumber); // 12345678987654321012345678987654321n


//Kiểu dữ liệu string
const msg1 = 'Đây là string dùng dấu nháy đơn';
const msg2 = "Đây là string dùng dấu nháy kép";
const msg3 = `Đây là string dùng dấu backtick`;
const msg4 = '1 + 2 = ${1 + 2}';

//Kiểu dữ liệu symbol