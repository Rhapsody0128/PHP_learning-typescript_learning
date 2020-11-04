enum horseColor {White,Black,Brown,Grey,Rainbow};

class Horse{
  constructor(
    public name:string,
    public color:horseColor,
    public readonly type:string,
    private noise:string = 'meeeeeeeeEeeeeeeee~'
  ){}
  
  public makeNoise(){
    console.log(this.noise);
  }

  protected infoText():string{
    return `It's ${this.name}, the ${horseColor[this.color]}${this.type}`
  }

  public info(){
    console.log(this.infoText());
  }
}

let horse = new Horse(`Martin`,horseColor.Black,'短腿馬')
horse.info()

let xhorse = new Horse('Martin',horseColor.Grey,'小隻馬')

// xhorse.color = 'red' !類型錯誤
// xhorse.isPet = true !新增屬性
// xhorse = null !直接複寫錯誤的值

// 類別的型別註記法

// 1.用常見的型別註記法
let certainlyAHorsie:Horse = new Horse('Leo',horseColor.Black,'高原馬')

// 2.用顯性型別註記法
let certainlyAnotherHorsie = <Horse>(new Horse('Wendy',horseColor.Grey,'蒙古高原馬'))

// 3.用'as'型別註記法
let certainlyTheOtherHorsie = new Horse('Alex',horseColor.White,'草原馬') as Horse;

type SomeType = {
  message:string;
}

// class someClass implements SomeType {
//   message:string
//   constructor(){
//     this.message='aa'
//   }
// } !型別(type)和類別(class)是可以結合(implements)使用的，但不鼓勵如此使用，型別意義是靜態的資料格式，類別的設計是針對動態行為

class Unicorn extends Horse {
  constructor(name:string){
    super(name,horseColor.Rainbow,'Unicorn','Nheeeeeeeeeeheeeeeeeeeeeheeeheee~heehee~heeeheee')
  };
  protected infoText():string{
    return `It's a mystical unicorn ! Its name is ${this.name}!`;
  }

  public punk():void{
    console.log('Punking rainbow vomit!');
  }
}
let AUnicorn = new Unicorn('Charile')

let Unihorse:Horse = new Unicorn('Unihorse')

// 因此可以認定被註記為父類別的變數可以指派子類別的物件 —— 在原生 JS 裡的詮釋下 —— 它們隸屬於同一個原型鍊（Prototype Chain）下的產物。

AUnicorn.punk()
// Unihorse.punk() ! 雖然是Unicorn，但繼承Horse的屬性，Horse沒辦法吐口水

// let Horicorn:Unicorn = new Horse('Horicorn',horseColor.Rainbow,'Unicron') ! 如果是在父類別建構出來的物件 —— 手動對該物件新增屬性或方法就會破壞掉物件的完整性

class Stallion extends Horse{
  constructor(name:string){
    super(name,horseColor.Brown,'Stallion')
  }
}

let shouldBeStallion:Stallion = new Horse('Stall',horseColor.Brown,'Stallion')

// 假設宣告某類別 C，另外再宣告 C_Inherit 為繼承 C 的子類別，則：

// A. 子類別 C_Inheirt的型別推論機制跟普通類別的型別機制一模一樣（查看本篇重點 2）
// B. 若變數 A 被註記之型別為父類別 C，A 除了可被指派 C 類別建構出來的物件外，子類別 C_Inherit 建構出來的物件也可以被指派到 A
// C. 若變數 B 被註記之型別為子類別 C_Inherit —— 在 C_Inherit 繼承父類別 C 的過程中，並未額外定義 C 本身沒有的成員的條件下，父類別 C 所建構出來的東西可以被指派到變數 B

// 定義兩個名稱不同內容完全相同的類別
class A {
  constructor(public prop:string){}

  public publicMethod():string{
    return this.prop;
  }
}
class B {
  constructor(public prop:string){}

  public publicMethod():string{
    return this.prop;
  }
}

let someObj:A = new B('hello')
// 局然通過!!??

class C {
  constructor(public prop:string,private privateProp:string){}

  public publicMethod():string{
    return this.prop;
  }
  private privateMethod():string{
    return this.prop;
  }
}
class D {
  constructor(public prop:string,private privateProp:string){}

  public publicMethod():string{
    return this.prop;
  }
  private privateMethod():string{
    return this.prop;
  }
}
// let anotherObj : C = new D('hello','there') ! private 模式下的成員會使得類別的使用形式被改變，因此不能夠等效於其他格式相同的類別呢！ 