"use strict";
var a = /** @class */ (function () {
    function a() {
        this.a = 'gary';
        this.b = 15;
    }
    a.prototype.getinfo = function () {
        console.log(this.a, this.b);
    };
    return a;
}());
// console.log(a);
// let b = new a 
// console.log(b.a);
// b.getinfo()
var c = /** @class */ (function () {
    function c(a, b) {
        this.a = a;
        this.b = b;
    }
    c.prototype.getinfo = function () {
        console.log(this.a, this.b);
    };
    return c;
}());
var CrashMachine = /** @class */ (function () {
    // 類別使用 implements 連結某介面（或型別）與我們在對某變數積極註記某一個型別/介面的概念很像。因此可以想成類別 implements 某介面 —— 就等同於我們在對類別進行積極註記（Annotation）的動作！
    // private users: TUserAccount[] = [
    //   {account:'gary', password:'830128',money:18510},
    //   {account:'tina', password:'11123',money:18510},
    //   {account:'gary', password:'zxcczsdf',money:213124}
    // ];
    function CrashMachine(users) {
        this.users = users;
    }
    CrashMachine.prototype.signIn = function (account, password) {
        for (var i = 0; i < this.users.length; i++) {
            var user = this.users[i];
            if (user.account === account && user.password === password) {
                this.currentUser = user;
                console.log("\u76EE\u524D\u9918\u984D" + user.money);
                break;
            }
        }
        if (this.currentUser === undefined) {
            throw new Error('找不到目前使用者');
        }
    };
    CrashMachine.prototype.signOut = function () {
        this.currentUser = undefined;
    };
    CrashMachine.prototype.deposit = function (value) {
        if (this.currentUser !== undefined) {
            this.currentUser.money += value;
        }
        else {
            throw new Error('存款錯誤');
        }
    };
    CrashMachine.prototype.withdraw = function (value) {
        if (this.currentUser !== undefined) {
            this.currentUser.money -= value;
        }
        else {
            throw new Error('提款失敗');
        }
    };
    return CrashMachine;
}());
function printAccountInfo(input) {
    if (input === undefined) {
        console.log('No user found!');
    }
    else {
        console.log("\n      Current User:" + input.account + "\n      Money:" + input.money + "\n    ");
    }
}
var machine = new CrashMachine([
    { account: 'gary', password: '830128', money: 18510 },
    { account: 'tina', password: '11123', money: 18510 },
    { account: 'gary', password: 'zxcczsdf', money: 213124 }
]);
console.log('初始化');
printAccountInfo(machine.currentUser);
machine.signIn('gary', '830128');
console.log("登入");
printAccountInfo(machine.currentUser);
machine.withdraw(5000);
console.log('提款');
printAccountInfo(machine.currentUser);
machine.signOut();
console.log('登出');
printAccountInfo(machine.currentUser);
machine.users.account = 'asdas';
console.log(machine.users.account);
// 存取修飾子總共分為三種模式：public、private 以及 protected
// 若宣告某類別 C，則裡面的成員變數 P 或成員方法 M 被註記為：
// public 模式時：P 與 M 可以任意在類別內外以及繼承 C 的子類別使用
// private 模式時：P 與 M 僅僅只能在當前類別 C 內部使用
// protected 模式時： P 與 M 除了當前類別 C 內部使用外，繼承 C 的子類別也可以使用
