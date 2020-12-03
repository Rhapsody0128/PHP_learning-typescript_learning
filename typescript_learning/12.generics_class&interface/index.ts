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

// class MyLinkedList implements LinkedListSec<T>{} ! 單純implements 會被 TS 警告內容物不足

// class MyGenericLinkedList<T> implements LinkedListSec<T>{} ! 單純implements 會被 TS 警告內容物不足

class GenericLinkedListNode<T> implements LinkedListNodeSec<T>{
  public next:LinkedListNodeSec<T>|null = null
  constructor(public value:T){}
}

class GenericLinkedList<T> implements LinkedListSec<T>{
  public head:LinkedListNodeSec<T>|null = null;
  public length(){
    if(this.head ===null) return 0

    let count = 0
    let currentNode:LinkedListNodeSec<T>|null=this.head
    while(currentNode!==null){
      currentNode = currentNode.next;
      // 注意上面的currentNode型別不再是上面宣稱的LinkedListNodeSec<T>|null，而是LinkedListNodeSec<T>，因為在while的判斷已經把null篩選掉了，但currentNode.next有可能為null
      count++
    }
    return count;
  }
  public at(index:number):LinkedListNodeSec<T>|null{
    const length=this.length()
    // 如果長度小於index則無條件視為out of bound，直接丟出ERROR
    // index從0開始計算，跟陣列概念一樣:
    //  長度為0的鏈結串列index==0必丟出ERROR
    //  長度為3的鏈結串列index==2為最後一個值
    //  但3以上必丟出ERROR
    if(index>=length) throw new Error('Index out of bound');

    let currentIndex = 0
    let currentNode = this.head as LinkedListNodeSec<T>;
    while(currentIndex!==index){
      currentNode = currentNode.next as LinkedListNodeSec<T>;
      currentIndex++
    }
    return currentNode
  }
  public insert(index:number,value:T){
    const length = this.length();
    const newNode = new GenericLinkedListNode(value)

    // 如果長度小於index就丟出錯誤
    if(length<index) throw new Error('Index out of bound')

    // 如果剛好等於index值，代表要插入新的節點
    else if(length ===index){
      if(index===0){
        this.head = newNode;
      }else{
        const node = this.at(index-1)as LinkedListNodeSec<T>;
        node.next = newNode
      }
    }
    
    // 長度大於index值，就代表要從中插入新的LinkedListNode
    else{
      if(index===0){
        const originalHead = this.head;
        this.head =  newNode;
        this.head.next = originalHead;
      }else{
        const prevNode=  this.at(index-1) as LinkedListNodeSec<T>;
        const originalNode = prevNode.next as LinkedListNodeSec<T>
        prevNode.next = newNode
        newNode.next = originalNode
      }
    }
  }
  public remove(index:number):void{
    throw new Error("Method not implemented")
  }
  public getInfo(){
    let currentNode = this.head;
    let currentIndex = 0

    while (currentNode !== null){
      console.log(`Index ${currentIndex}:${currentNode.value}`);
      currentNode = currentNode.next;
      currentIndex++
    }
  }
}


const l = new GenericLinkedList<number>()

l.insert(0,12)
l.insert(1,56)
l.insert(2,78)
l.insert(1,34)
l.getInfo();

// 檢視鏈結串列中index=0~3的元素之值:
// 由於我們確定 l.at(index) where index = 0~3
// 100%絕對是LinkedListNode<number>，而非null，
// 因此採取顯性註記的動作
console.log((l.at(0) as LinkedListNodeSec<number>).value);
console.log((l.at(1) as LinkedListNodeSec<number>).value);
console.log((l.at(2) as LinkedListNodeSec<number>).value);
console.log((l.at(3) as LinkedListNodeSec<number>).value);

try{
  l.at(4)
}catch(err){
  console.log('Out of bound error caught');
}

// 判斷註記型別的時機，若型別部分你有 100% 信心認為是某特定型別，你應該選擇型別積極註記的動作，不需要擔心會不會造成型別壟斷的行為。

// 建立GenericLinkedList物件但不指派型別直到型別參數
const unspecifiedTypeParamLinkedList = new GenericLinkedList();
// Ts為推論為unspecifiedTypeParamLinkedList<unknown>

type Tany = string|number|boolean
const specifiedTypeParamLinkedList = new GenericLinkedList<Tany>();