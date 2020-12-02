type Identity<T> = T

// Identity 這個型別化名的宣告裡，有一個被稱為型別參數（Type Parameter）的東西 —— 也就是 Identity<T> 裡面的 T 這個東西。


let shouldBeNumber:Identity<number>
// 相當於 let shouldBeNumber:number



// 宣告一個泛用的Dictionary型別化名
type Dictionary<T>={
  [prop:string]:T
};

let correctDict:Dictionary<boolean> = {
  wentToClub:true,
  playedMahjong:true
}

let wrongDict:Dictionary<boolean> = {
  koreanIsFun:true,
  // whyIsKoreanFun:'No mayor evaded' ! 不是泛用型別指定的boolean型別
}

// 宣告一個泛用的LinkedList和LinkedListNode介面
interface LinkedList<T> {
  head:LinkedListNode<T> | null;
  length:number;
  at(index:number):LinkedListNode<T>| null;
}

interface LinkedListNode<T>{
  value:T;
  next:LinkedListNode<T>|null;
}

type operator<T>=(p1:T,p2:T)=>T

let addition:operator<number>=function (p1:number,p2:number):number {
    return p1+p2
  }

let stringConcatenation:operator<string>=function(p1:string,p2:string):string{
  return p1+p2
}

function IdentityFunc<T>(something:T):T{
  return something
}

type TypeConversion<T,U>=(input:T)=>U;

let isPositive:TypeConversion<number,boolean>=function(input:number){
  return input>0;
}

let anythingToString:TypeConversion<any,string>=function(input:any){
  return input.toString();
}

// 宣告一個泛用的TypedArray類別
class TypedArray<T>{
  constructor(public value:T[]){}
}

type MyArray<T>=T[]

// 用 typeScript 陣列型別方式表示陣列
let numericArray:number[] = [1,2,3]

// number[]等效於Array<number>
let anotherMumericArray:Array<number>=numericArray

// 用 typeScript 泛用型別表示陣列
let stringArray:Array<string>=['Hello','World'];

// Array<string> 等效於 string[]
let anotherStringArray:string[]=stringArray;


// 條件型別的應用 Conditional Types
// 應用部分官方是稱作 Utility Type - 以下以Required為例子

interface personalInfo{
  name:string;
  age?:number;
  hasPet?:boolean
}

// 至少有name，但不一定要age和pet
let validPersonalInfo:personalInfo={
  name:'Gary',
  hasPet:false
}

// 多一個不相關的 key-value 就會被 TypeScript 瞧
let wrongPersonalInfo:personalInfo={
  name:'Gaet',
  age:20
  // hasMotocycle:true ! 多出來的 key-value
}

// 但被冠上Require條件型別後TypeScript就會嚴格要求age和hasPet必須存在

// let incompletePersonalInfo:Required<personalInfo>={
//   name:'Gary',
//   age:20
// } ! 缺少 hasPet key-value
// 如果被冠上 Required 這個條件型別，內部的 PersonalInfo 介面會把所有的選用屬性轉成必要屬性


// 基礎泛用型別註記
// 泛用型別之參數有被指定的狀況
let numberArr:Array<number> = [1,2,3];

// 泛用型別之參數沒有被指定的狀況
// let unspecifiedTypeParamArr:Array=[1,2,3] ! 泛用型別 Array 需要一個<引數>

type A<a,b,c> = a

interface B<a,b,c>{
  a:a
  b:b
  c:c
}
class C<a,b,c> {
  constructor(){
    return 15
  }
}

let AA : A<number,string,boolean> = 15

let BB:B<number,string,boolean> = {
  a:15,
  b:'asd',
  c:true
}

let CC:C<number,string,boolean>={
  a:15,
  b:15,
  c:'aa',
  constructor(a:string){
    return a
  }
}

console.log(CC);

// 預設型別參數 Default Type Parameter

type DefaultStringDict<T=string>={
  [prop:string]:T
}

let stringDict:DefaultStringDict={
  message:'Hello World',
  language:'TypeScript'
}

let booleanDict:DefaultStringDict<boolean> = {
  hasPet:false,
  hasMotocycle:true
}

// 泛用化名之行別參數限制
// 宣告Primitives為所有原始型別的union
type Primitives = number|string|boolean|null|undefined

// 宣告PrimitivesArray為泛用刑別，但是T被限制為Primitives的範疇
type PrimitiveArray<T extends Primitives> = Array<T>

// 單純的原始型別陣列
let numberPrimitiveArr:PrimitiveArray<number> = [1,2,3]

let stringPrimitiveArr:PrimitiveArray<string> = ['Hello','World']


// 原始型別復合的陣列 => 照樣府和原始型別 union 的範疇
let numberOrStringPrimitiveArr:PrimitiveArray<number|string>=[1,"2",3]

// 物件型別的陣列 => 非原始型別，會被 TS 警告
interface PersonalInfo{}
// let invalidObjectArray:PrimitiveArray<PersonalInfo>=[{},{},{}] ! PersonalInfo 沒有符合 Primitives 的限制需求

// ------------------------------------

// 泛用型別化名的型別參數限制 Type Constraint in Generic Type Alias
// 某泛用型別化名 GT 之型別參數 Tparam 被限制在某型別 Tcontraint 範圍之下，可以使用 extends 關鍵字，其格式為：

// type GT<Tparam extends Tconstraint> = (內容包含Tparam);

// 則該型別 GT 一但被註記到某變數時，裡面的型別參數不能代入超出 Tconstraint 以外的型別值。

// 若 Tconstraint 為一系列型別 T1、T2、...、Tn 的 union 結果，則 Tparam 代入的型別可以為 T1、T2、...、Tn 任意組合 union 過後的結果。

// 泛用介面與泛用類別的型別參數限制的語法皆相同

// ------------------------------------


// 使用條件類別寫法

type TypedPrinitiveArray<T extends Primitives> = 
T extends number ? T[]:
T extends string ? T[]:
T extends boolean ? T[]:
T extends null ? T[]:
T extends undefined ? T[]: never

// 合理用法:
let onlyNumberArr:TypedPrinitiveArray<number>=[1,3,5]

let onlyStringArr:TypedPrinitiveArray<string>=['56','1651']

// 違法使用行為:
// let invalidPrimitiveUnionArr:TypedPrinitiveArray<number|string>=[1,"3",5] ! number | string 是不能被 TypedPrimitiveArray 混用狀態


// 條件型別（Conditional Type）針對 union 過後的複合型別具有分配性質（Distributive Property），跟數學上的分配律很像。

// 泛用函式
// 宣告一個名為traverseElements的泛用函式
function traverseElements<T>(
  values:Array<T>,
  callback:(el:T,index:number)=>void,
){
  for(let i = 0 ;i<values.length;i++){
    callback(values[i],i)
  }
}

// 宣告一個數字陣列型別符合Array<number>
let numberArrayInput = [2,3,4,8];

// 一個函示負責將數字陣列裡的值
let traverseCallBack = function(el:number,index:number){
  console.log(`Index ${index} - Value ${el}`);
}

// 可以合併簡化為
traverseElements<number>(
  [2,3,4,8] as Array<number>,
  function(el:number,index:number){
    console.log(`Index ${index} - Value ${el}`);
  }
)

// 再簡化...
traverseElements<number>(
  [2,3,4,8],
  function(el,index){
    console.log(`Index ${index} - Value ${el}`);
  }
)
