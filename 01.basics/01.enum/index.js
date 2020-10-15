"use strict";
var a;
(function (a) {
    a[a["a"] = 0] = "a";
    a[a["b"] = 1] = "b";
    a[a["c"] = 2] = "c";
    a[a["true"] = 3] = "true";
    a[a["null"] = 4] = "null";
})(a || (a = {}));
var num = a.true;
var value = a[3];
console.log(num);
console.log(a[num]);
console.log(typeof (value));
console.log(a[0]);
