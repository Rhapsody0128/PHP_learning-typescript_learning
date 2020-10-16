// ---設定型別
type a = {
  a:string,
  b:number
  c:boolean
}
//函式綁定e=之後帶入的值，宣稱其格式為a類別
function d (e:a){
  console.log(`a:${e.a}`);
  console.log(`b:${e.b}`);
  console.log(`c:${e.c}`);
}

const f = {
  a:'gary',
  b:15,
  c:true,
  hl:'aa',
  not:null
}

const e = d(f)

console.log(e);
// ---若不確定是否只有一種屬性(可以被忽略的屬性)，可在KEY後加上'?'
type z = {
  a:string,
  b?:number,
  c?:boolean
}
let y : z = {
  a:'aa'
}
console.log(y);
// ---複合式型別
type x = z & a 
type u = x & a 
type m = u & x
// 可用ctrl來驗證最後m是由那些type組成