// 一般宣告鏈結串列的介面
interface LinkedListNode{
  value:any;
  // value 代表該元素所存的值
  next:LinkedListNode | null;
  // next 則是取得下一個鏈結串列的元素，但結果也可以為 null 代表該元素可能是鏈結串列裡的最後一個元素
}

interface LinkedList{
  head:LinkedListNode|null;
  // head 代表鏈結串列的首個元素 LinkedListNode，由於鏈結串列可為空的狀態，因此不排除 head 為 null 型別的可能性
  length():number
  // length 是一個方法，輸出的是鏈結串列的長度（當然也可以使用普通的 number 型別而不採用 (): number 函式型別，但你可能必須要監控好 insert 或 remove 鏈結串列的值時，更新 length 的大小）
  at(index:number):LinkedListNode|null;
  // at 是一個方法，輸入為 index 代表鏈結串列的位置，但是輸出既可以為 LinkedListNode 外也可以為 null 值
  insert(index:number,value:any):void;
  // insert 代表將某任意值 value（型別為 any）插入進鏈結串列，位置由 index 指定
  remove(index:number):void
  // remove 則是根據 index 指名的位置移除連結串列裡的元素
}

// 使用泛用參數的方法宣告泛用介面
interface LinkedListNodeSec<T> {
  value:T;
  next:LinkedListNodeSec<T> | null;
}

interface LinkedListSec<U>{
  head:LinkedListNodeSec<U>|null;
  length():number
  at(index:number):LinkedListNodeSec<U>|null;
  insert(index:number,value:any):void;
  remove(index:number):void
}

// 泛用類別宣告
class C<T>{
  constructor(public memberProp:T){}
  // 名為 memberProp 的成員變數，對應型別為 C 所宣告出的型別參數 T
  public memberFunc(){
    return this.memberProp;
  }
  // memberFunc 則是輸出 memberProp 的值

  get value(){
    return this.memberProp;
  }
  set value(input:T){
    this.memberProp = input;
  }
  // 存取方法 value，分別覆寫或者輸出 memberProp
}

// 1.不註記在變數上，建立物件時顯性填入型別參數
let instanceOfC1 = new C<number>(15)

console.log(
instanceOfC1.memberProp,
instanceOfC1.memberFunc(),
instanceOfC1.value = 15,
instanceOfC1.value
);

// 2.註記載變數上，建立物件時不住記載類別化名旁的型別參數
let instanceOfC2:C<number> = new C(15)

console.log(
  instanceOfC2.memberProp,
  instanceOfC2.memberFunc(),
  instanceOfC2.value = 15,
  instanceOfC2.value
  );

// 3.不註記在變數上，但指派建構之物件時，你甚至不需要填入型別參數在建構子函式上，但仍可以推論出型別參數
let instanceOfC3 = new C(15)

console.log(
  instanceOfC3.memberProp,
  instanceOfC3.memberFunc(),
  instanceOfC3.value = 15,
  instanceOfC3.value
  );

// 子類別繼承父類別，且父親別為泛用類別的狀態

// D 繼承 C<T>
// class D extends C<T>{} ! 

// 首先，D 本身沒有型別參數，因此它不是泛用類別，但是它繼承了 C —— 不過 D 必須要確定你繼承的 C 對應的確切型別，這概念就很像是你要註記一個特定型別給一個特定變數 —— 因此筆者再次重申，前一節的重點 1 已經講過：如果某變數必須註記某個泛用型別，除非該泛型的型別參數有預設值，否則缺少型別參數對應的型別值就會出現錯誤警告。

// 頂多以 D 子類別為例，這一次 D 因為想要直接繼承某個類別，它也必須很確定它到底要繼承的確切型別是什麼 —— 也就是說，如果你選擇忽略類別 C 之 T 型別參數對應的型別值也會被 TypeScript 警告。

// 所以要改成:
class D extends C<string>{}


// E<T> 繼承 C<T>
class E<T> extends C<T>{}

// 另外，E<T> 由於本身就是泛用類別的宣告，因此它有型別參數 T，而且它還可以將它的型別參數代入到它要繼承的 C 類別的型別參數部分。也就是說，想要建構 E<number> 這種型別的物件，就等同於模擬 E 繼承 C<number> 的情形。

class Cparent<T,U>{
  constructor(
    public member1:T,
    public member2:U
  ){}
}

class Cchild1<T,U> extends Cparent<T,U>{}
class Cchild2<T,U = T> extends Cparent<T,U>{}
class Cchild3<T,U extends T> extends Cparent<T,U>{}