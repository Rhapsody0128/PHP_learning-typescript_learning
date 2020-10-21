"use strict";
// typescript union & intersection 與其認為是聯集和交集，不如翻譯成or和and (|,&)
// type d - 必須滿足其中兩個(a and b)的條件
var d = {
    a: 'aa',
    b: true,
    c: 36
};
var i = function (p1) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (typeof p1 === 'number' && args instanceof Array) {
        return args.reduce(function (acc, cur) { return acc + cur; }, p1);
    }
    else if (p1 instanceof Array) {
        return p1.reduce(function (acc, cur) { return acc + cur; }, 0);
    }
    throw new Error('something is wrong with your inputs');
};
console.log(i(1, 2, 3));
console.log(i([1, 2, 3]));
