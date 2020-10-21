// interface - 用法幾乎相同於type，但意義上有差別
interface t1 {a:string ; b:number}
interface t2 {           b:number ; c:boolean}
interface t3 {a:string ;            c:string}

interface t12 extends t1,t2 {}
// interface t23 extends t3,t2 {} - 衝突
interface t13 extends t1,t3 {}
// interface t123 extends t1,t2,t3 {} - 衝突

// 以下兩者呈現結果一樣，但意義差很多
interface a {a:string}
interface b {a:string}
interface c extends a,b {}
// 想要實作 c 的介面時，除了必須符合 c 本身的屬性與功能外，還必須實作出 a 與 b 的介面定義出來的屬性與功能”

type d = {a:string}
type e = {a:string}
type f = d & e
// f 的靜態資料格式為 d 與 e 的組成


// interface 單字可以類比為 TypeScript 的介面，而 implementation 單字可以類比為型別系統裡的 type。
// 再者，interface 跟 type 最大差別就是今天一開始講到的：能不能夠被延展（Extensibility）。
// TypeScript 介面使用 extends 進行介面延展的這個特性是根本的，就很像是數字從 0 開始數是根本的（可能會從 1 開始也說不定）—— 不會有人從 3.1415926 或 2.71828 開始數數字。
// 而 TypeScript 型別：不管如何，代表的意義都是指 -- 靜態的格式。『 靜態 』這兩個字對於型別系統代表的意義是根本。不管你再怎麼重組型別，如果是用 type 宣告，你都只是在定義新的型別！如果這種重組行為被歸類為延展的話 -- 相反地，那叫做『 動態 』囉。
// 因此，大部分針對 TypeScript 介面跟型別的比較結論是：我們可以對介面進行延展，而型別不行！
// 重點 2. 介面與型別的意義與特性
// 介面與型別各自代表的意義如下：
// 介面：規格（Spec）的概念，可以組裝、延展（使用 extends）
// 型別：靜態的資料格式，不能被延展，每一次宣告新的型別化名 —— 對型別進行複合形式的操作 —— 都是在定義新的型別，不是延展作用

// function overload

// function   addition(p1:number,p2:number){
//   return p1 + p2
// }
// function   addition(p1:string,p2:string){
//   return parseInt(p1) + parseInt(p2)
// }

interface AddOperation {
  addition(p1:number,p2:number):number
  addition(p1:string,p2:string):number
} 

// const implementAddition:AddOperation = {
//   addition(p1:string,p2:string){
//     return parseInt(p1) + parseInt(p2)
//   },
//   addition(p1:number,p2:number){
//     return p1+ p2
//   }
// }

const implementAddition:AddOperation = {
  // if...else... 判斷敘述後，儘管讓參數 p1 與 p2 可以為 number 或 string，但是參數的組合也有可能是 p1 與 p2 分別為 p1: number; p2: string 或 p1: string; p2: number —— 後兩種組合狀況會導致直接跳脫函式，並回傳 undefined，但這不符合函式型別輸出的規定狀況。（除非輸出改成 number | void）
  addition(p1:number|string,p2:number|string){
    if(typeof p1 == 'number' && typeof p2 == 'number'){
      return p1 + p2
    }else if (typeof p1 == 'string' && typeof p2 == 'string'){
      return parseInt(p1) + parseInt(p2)
    }
    throw new Error(
      `Parameter \`p1\`and\`p2\`should only accept both\`number\`type or \`string\`type.`
    );
  }
}

interface AddOperation1{
  add(p1:number,p2:number):number
  add(p1:number,p2:number):number
}
interface AddOperation2{
  // add(p1:number,p2:number):number
  add(p1:number,p2:number):string
}
interface AddOperation3{
  add(p1:number):number
  add(p1:number,p2:number):number
}

// const z:AddOperation3 = {
//   add(p1:number ,p2:number){
//     return p1
//   }
// }

type T = number
interface I {
  a:string;
}
interface I {
  c:boolean
}
interface K {
  b:number;
}
type U = I & K;
type Y = T | I |K;
interface J extends K, I {};

let asd :U = {
  a:'aa',
  b:1801,
  c:true
}


// ---type 和 interface定義型態差別之我論---
// type(類別)屬於靜態類別，來定義固定式條目，事後盡量不要做修改的，可以使用列舉(Enum)和元組(Tuple)，合併邏輯為new type = old + old
// interface(介面)屬於動態類別，可以定義浮動式條目，事後可以修改和合併，無法使用列舉和元組，但可以用擴充(Extends)，合併邏輯為new interface merge (old, old)
