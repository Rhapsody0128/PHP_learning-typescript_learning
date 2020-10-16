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


// 無法跳脫出該函式或方法，或出現例外結果中斷執行，其型別為never
let never = function(){
  while(true){
  }
}
// 若有其他型別存在，never不會並存，而是被吸收
// 簡單來說會出現never型別代表出現bug，若有型別，代表沒有bug故不會傳出never

type T = never;
type U = void | never;
type O = any | never;
type N = number & never


// 然而，開發者也可以開發安全版本的讀取 CSV 檔案的函式，其回傳的型別為 unknown —— 代表只要任何開發者使用這個安全版本的函式回傳之值，使用者必須強行註記該 CSV 回傳值之格式。就算開發者忘記要註記結果，也會被 TypeScript 主動警告。
// 另一個直截了當可以馬上使用 unknown 的時機，就是寫一個安全的函式（或方法）把不安全的函式（或方法）包裝起來。比如說，把 JSON.parse 這種會回傳 any 的方法函式包裝起來，變成：

function h(ee:string):unknown {
  return JSON.parse(ee)
}
let i = h('true')

console.log(i);

let isUnknown:unknown
let isAny:any
let isNumber:number
let isString:string
let isArray:string[]
// Type Guard 限制型別被推論到的可能性 —— 來 Bypass unknown 型別原先的限制 —— 不能被指派到被註記到的任意型別（除了 unknown 與 any）的變數
// isNumber = isUnknown
if(typeof isUnknown == 'number'){
  isNumber = isUnknown
}
isString = <string>isUnknown
isArray = isUnknown as string[]
// isAny.greets('asdas')
// isAny.aaa
// isUnknown.push('asdas')
// isUnknown.aaa

let unknownObject :unknown = {
  hello:'hi~',
  response:function(content:string){console.log(content);}
}
type person = {
  hello:string,
  response:(content:string) =>void
}

// unknownObject.hello
// unknownObject.response('hi')

(<person>unknownObject).hello;
(unknownObject as person).hello

let number:unknown = '123456'
// parseInt(number,10)
if(typeof number == 'string'){
  parseInt(number,10)
  console.log(parseInt(number,10));
}

let k1 :unknown & number
let k2:unknown & any
let k3 :unknown & never

let k4 :unknown | number
let k5 :unknown | any
let k6 :unknown | never