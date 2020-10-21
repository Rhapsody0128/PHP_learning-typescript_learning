// typescript union & intersection 與其認為是聯集和交集，不如翻譯成or和and (|,&)

type a ={
  a:string
  b:boolean
}
type b ={
  b:boolean
  c:number
}
type c = a | b
// type c - 必須滿足其中一個(a or b)的條件
type d = a & b
// type d - 必須滿足其中兩個(a and b)的條件
let d :d | c={
  a:'aa',
  b:true,
  c:36
}
// 剛剛使用 union 時的情境：

// 將 a 跟 b 進行 union -- 把它轉換成：將 a 和 b OR 起來之後是不是邏輯通順很多？

// 你可以選擇只要符合 a 要求的型別或介面格式
// 或（OR）你可以選擇只要符合 b 要求的型別或介面格式
// 但你也可以全部都符合
// **不過就是至少一個條件一定要滿足，否則出錯！**因此空集合概念在這裡也不覆存在，會被認定是錯的，因為 OR 邏輯本來就是建立在其中一方符合的條件下才能滿足的。



// 對比使用 intersection 時：

// 將 a 跟 b 進行 intersection -- 把它轉換成：將 a 與 b AND 起來之後是不是邏輯通順很多？

// 你必須符合 a 和（AND）b 的型別或介面格式
// 只要少了一個屬性就會出錯，完全符合 AND 邏輯的真諦

type f = string & number
// type f = never

// never is a subtype of and assignable to every type.

type g = a & number

// 型別檢測 Type Guard

interface h {
  (...args:number[]):number
  (arr:number[]):number
}

let i :h = function(p1:number|number[],...args:number[]){
  if(typeof p1 === 'number'&& args instanceof Array){
    return args.reduce((acc,cur)=>acc+cur,p1);
  }else if(p1 instanceof Array){
    return p1.reduce((acc,cur) => acc + cur, 0);
  }
  throw new Error('something is wrong with your inputs')
}
console.log(i(1,2,3));
console.log(i([1,2,3]));

// 若想要過濾出純原始型別的值的話，使用 typeof 操作子
// 若想要過濾出廣義物件型別或類別(Class)的值的話，使用 instanceof 判斷操作子，並填上屬於該物件型別所屬的類別
// 其他方式，譬如 Array.isArray 可以檢測陣列

