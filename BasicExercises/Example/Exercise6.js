var array = [1, 2, 3];
for (var i = 0; i < array.length; i++) {
    console.log(i);
}

var array = [1, 2, 3];
array.forEach(function(i) {
    console.log(i);
});


// Reducr
const data = [5, 10, 15, 20, 25];

const res = data.reduce((total, currentValue) => {
    return total + currentValue;
});

console.log(res); // 75



//Filter
var numbers = [100, 200, 300, 400, 500];

var selected_number = numbers.filter(function(value) {
    if (value == 300) {
        return false;
    }
    return true;
});

console.log(selected_number); // 100, 200, 400, 500