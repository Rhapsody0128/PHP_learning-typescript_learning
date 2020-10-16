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
