"use strict";
// 索引簽章參數類型必須為 'string' 或 'number'
var test = {
    'aa': [1, 1, 1],
};
var y = {
    a: 6,
    b: 7
};
// y.a = 0
// 會被阻止
y.b = 0;
function createCounter() {
    var value;
    var initializedNumber;
    var counter = (function (startNumber) {
        initializedNumber = startNumber;
        value = startNumber;
    });
    counter.increment = function () {
        value++;
        return value;
    };
    counter.reset = function () {
        value = initializedNumber;
    };
    Object.defineProperty(counter, 'value', {
        get: function () { return value; }
    });
    return counter;
}
var counter = createCounter();
console.log(counter.value);
counter(3);
console.log(counter.value);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.value);
counter.reset();
console.log(counter.value);
