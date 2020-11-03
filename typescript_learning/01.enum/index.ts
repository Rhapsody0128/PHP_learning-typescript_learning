// 列舉enum建立一個可雙向檢查的JSON
enum a {a,b,c,true,null}
const num = a.true 
const value = a[3]
console.log(num);
console.log(a[num]);
console.log(typeof(value));
console.log(a);
