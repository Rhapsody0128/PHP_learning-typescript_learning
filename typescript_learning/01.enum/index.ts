// 列舉enum建立一個可雙向檢查的JSON
enum a {a,b,c,true,null}
// (function (a) {
//   a[a["a"] = 0] = "a";
//   a[a["b"] = 1] = "b";
//   a[a["c"] = 2] = "c";
//   a[a["true"] = 3] = "true";
//   a[a["null"] = 4] = "null";
// })(a || (a = {}));
// 在這裡a.a = 0, a[0]=a
const num = a.true 
const value = a[3]
console.log(num);
console.log(a[num]);
console.log(typeof(value));
console.log(a);
