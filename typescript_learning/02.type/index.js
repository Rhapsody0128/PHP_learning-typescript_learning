"use strict";
//函式綁定e=之後帶入的值，宣稱其格式為a類別
function d(e) {
    console.log("a:" + e.a);
    console.log("b:" + e.b);
    console.log("c:" + e.c);
}
var f = {
    a: 'gary',
    b: 15,
    c: true,
    hl: 'aa',
    not: null
};
var e = d(f);
console.log(e);
var y = {
    a: 'aa'
};
console.log(y);
// 可用ctrl來驗證最後m是由那些type組成
// 無法跳脫出該函式或方法，或出現例外結果中斷執行，其型別為never
var never = function () {
    while (true) {
    }
};
// 然而，開發者也可以開發安全版本的讀取 CSV 檔案的函式，其回傳的型別為 unknown —— 代表只要任何開發者使用這個安全版本的函式回傳之值，使用者必須強行註記該 CSV 回傳值之格式。就算開發者忘記要註記結果，也會被 TypeScript 主動警告。
// 另一個直截了當可以馬上使用 unknown 的時機，就是寫一個安全的函式（或方法）把不安全的函式（或方法）包裝起來。比如說，把 JSON.parse 這種會回傳 any 的方法函式包裝起來，變成：
function h(ee) {
    return JSON.parse(ee);
}
var i = h('true');
console.log(i);
var isUnknown;
var isAny;
var isNumber;
var isString;
var isArray;
// Type Guard 限制型別被推論到的可能性 —— 來 Bypass unknown 型別原先的限制 —— 不能被指派到被註記到的任意型別（除了 unknown 與 any）的變數
// isNumber = isUnknown
if (typeof isUnknown == 'number') {
    isNumber = isUnknown;
}
isString = isUnknown;
isArray = isUnknown;
// isAny.greets('asdas')
// isAny.aaa
// isUnknown.push('asdas')
// isUnknown.aaa
var unknownObject = {
    hello: 'hi~',
    response: function (content) { console.log(content); }
};
// unknownObject.hello
// unknownObject.response('hi')
unknownObject.hello;
unknownObject.hello;
var number = '123456';
// parseInt(number,10)
if (typeof number == 'string') {
    parseInt(number, 10);
    console.log(parseInt(number, 10));
}
