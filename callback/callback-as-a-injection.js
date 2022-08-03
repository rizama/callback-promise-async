function calculate(param1, param2, callback) {
    //default operation
    const result = param1 + param2;

    // callback is function ? injection
    if (typeof callback == 'function') {
        result = callback(param1, param2);
    }

    return result;
}

//execute
a = calculate(2000, 4000, function (x, y) {
    return '$ ' + (x + y);
});
b = calculate(7000, 2000, function (x, y) {
    return 'Rp ' + x * y;
});

c = calculate(6000, 9000);

console.log(a);
console.log(b);
console.log(c);