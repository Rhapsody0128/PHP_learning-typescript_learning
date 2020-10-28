class a {
  a:string = 'gary'
  b:number = 15
  getinfo(){
    console.log(
      this.a,
      this.b
    );
  }
}

// console.log(a);
// let b = new a 
// console.log(b.a);
// b.getinfo()

class c {
  a:string
  b:number
  constructor(a:string,b:number){
    this.a = a
    this.b = b
  }
  getinfo(){
    console.log(
      this.a,
      this.b
    );
  }
}

type TUserAccount= {
  account:string;
  password:string;
  money:number;
}

// 全部寫在一起:
// interface ICrashMachine {

//   deposit(value:number):void;

//   withdraw(value:number):void;

//   users:TUserAccount[]

//   currentUser:TUserAccount | undefined;
  
//   singIn(account:string,password:string):void;

//   signOut():void;
// }

interface AccountSystem {

  // users:TUserAccount[]

  // currentUser:TUserAccount | undefined;

  signIn(account:string,password:string):void;

  signOut():void;
}

interface TransactionSystem {

  deposit(value:number):void;

  withdraw(value:number):void;

}

interface ICrashMachine extends TransactionSystem,AccountSystem{}

class CrashMachine implements ICrashMachine {
  // 類別使用 implements 連結某介面（或型別）與我們在對某變數積極註記某一個型別/介面的概念很像。因此可以想成類別 implements 某介面 —— 就等同於我們在對類別進行積極註記（Annotation）的動作！
  // private users: TUserAccount[] = [
  //   {account:'gary', password:'830128',money:18510},
  //   {account:'tina', password:'11123',money:18510},
  //   {account:'gary', password:'zxcczsdf',money:213124}
  // ];

  constructor(public users:TUserAccount[]){}

  currentUser:TUserAccount|undefined

  signIn(account:string,password:string){
    for(let i = 0 ;i<this.users.length;i++){
      const user = this.users[i];
      if(user.account === account && user.password === password
      ){
        this.currentUser = user
        console.log(`目前餘額${user.money}`);
        break;
      }
    }
    if(this.currentUser === undefined){
      throw new Error('找不到目前使用者')
    }
  }
  signOut(){
    this.currentUser = undefined
  }
  deposit(value:number){
    if(this.currentUser !== undefined){
      this.currentUser.money += value;
    }else{
      throw new Error('存款錯誤')
    }
  }
  withdraw(value:number){
    if(this.currentUser!==undefined){
      this.currentUser.money-=value;
    }else{
      throw new Error('提款失敗')
    }
  }
}
function printAccountInfo(input:TUserAccount|undefined){
  if(input === undefined){
    console.log('No user found!')
  }else{
    console.log(`
      Current User:${input.account}
      Money:${input.money}
    `);
  }
}

const machine = new CrashMachine([
    {account:'gary', password:'830128',money:18510},
    {account:'tina', password:'11123',money:18510},
    {account:'gary', password:'zxcczsdf',money:213124}
  ])
console.log('初始化');
printAccountInfo(machine.currentUser)

machine.signIn('gary','830128')
console.log("登入");
printAccountInfo(machine.currentUser)

machine.withdraw(5000);
console.log('提款');
printAccountInfo(machine.currentUser)

machine.signOut()
console.log('登出');
printAccountInfo(machine.currentUser)

// 存取修飾子總共分為三種模式：public、private 以及 protected
// 若宣告某類別 C，則裡面的成員變數 P 或成員方法 M 被註記為：
// public 模式時：P 與 M 可以任意在類別內外以及繼承 C 的子類別使用
// private 模式時：P 與 M 僅僅只能在當前類別 C 內部使用
// protected 模式時： P 與 M 除了當前類別 C 內部使用外，繼承 C 的子類別也可以使用