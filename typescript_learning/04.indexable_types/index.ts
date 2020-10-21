type zen = {
  [name:string]:string
}
type zenz = {
  [name:string]:number
}


interface zena {
  [aa:string]:number[]
}

// 索引簽章參數類型必須為 'string' 或 'number'
let test :zena = {
  'aa':[1,1,1],
}




type UseBothKeyType = {
  [key: number]: string,
  [key: string]: string
};

type UserInfo1 = {
  name: string,
  [prop: string]: string;
}

// 類型 'Date' 的屬性 'birth' 不可指派給字串索引類型 'string'
// type UserInfo2 = {
//   name: string,
//   birth: Date,
//   [prop: string]: string;
// }

// ---readonly

interface z {
  readonly a :number
  b:number
}
const y :z = {
  a:6,
  b:7
}
// y.a = 0
// 會被阻止
y.b = 0

// -----Hybrid Type Interface
interface Counter {
  // 純函式格式
  (start:number): void;

  // 狹義物件格式
  increment():number;
  reset():void;
  value:number;
} 

function createCounter(): Counter {
  let value:number;
  let initializedNumber:number;

  const counter = (function(startNumber:number){
    initializedNumber = startNumber;
    value = startNumber
  }) as Counter

  counter.increment = function(){
    value++
    return value
  }

  counter.reset = function(){
    value = initializedNumber
  };
  Object.defineProperty(counter,'value',{
    get() { return value}
  });

  return counter;
}
const counter: Counter = createCounter()
console.log(counter.value);
counter(3)

console.log(counter.value);

counter.increment()
counter.increment()
counter.increment()

console.log(counter.value);
counter.reset()
console.log(counter.value);