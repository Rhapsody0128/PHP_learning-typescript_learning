"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var horseColor;
(function (horseColor) {
    horseColor[horseColor["White"] = 0] = "White";
    horseColor[horseColor["Black"] = 1] = "Black";
    horseColor[horseColor["Brown"] = 2] = "Brown";
    horseColor[horseColor["Grey"] = 3] = "Grey";
    horseColor[horseColor["Rainbow"] = 4] = "Rainbow";
})(horseColor || (horseColor = {}));
;
var Horse = /** @class */ (function () {
    function Horse(name, color, type, noise) {
        if (noise === void 0) { noise = 'meeeeeeeeEeeeeeeee~'; }
        this.name = name;
        this.color = color;
        this.type = type;
        this.noise = noise;
    }
    Horse.prototype.makeNoise = function () {
        console.log(this.noise);
    };
    Horse.prototype.infoText = function () {
        return "It's " + this.name + ", the " + horseColor[this.color] + this.type;
    };
    Horse.prototype.info = function () {
        console.log(this.infoText());
    };
    return Horse;
}());
var horse = new Horse("Martin", horseColor.Black, '短腿馬');
horse.info();
var xhorse = new Horse('Martin', horseColor.Grey, '小隻馬');
// xhorse.color = 'red' !類型錯誤
// xhorse.isPet = true !新增屬性
// xhorse = null !直接複寫錯誤的值
// 類別的型別註記法
// 1.用常見的型別註記法
var certainlyAHorsie = new Horse('Leo', horseColor.Black, '高原馬');
// 2.用顯性型別註記法
var certainlyAnotherHorsie = (new Horse('Wendy', horseColor.Grey, '蒙古高原馬'));
// 3.用'as'型別註記法
var certainlyTheOtherHorsie = new Horse('Alex', horseColor.White, '草原馬');
// class someClass implements SomeType {
//   message:string
//   constructor(){
//     this.message='aa'
//   }
// } !型別(type)和類別(class)是可以結合(implements)使用的，但不鼓勵如此使用，型別意義是靜態的資料格式，類別的設計是針對動態行為
var Unicorn = /** @class */ (function (_super) {
    __extends(Unicorn, _super);
    function Unicorn(name) {
        return _super.call(this, name, horseColor.Rainbow, 'Unicorn', 'Nheeeeeeeeeeheeeeeeeeeeeheeeheee~heehee~heeeheee') || this;
    }
    ;
    Unicorn.prototype.infoText = function () {
        return "It's a mystical unicorn ! Its name is " + this.name + "!";
    };
    Unicorn.prototype.punk = function () {
        console.log('Punking rainbow vomit!');
    };
    return Unicorn;
}(Horse));
var AUnicorn = new Unicorn('Charile');
var Unihorse = new Unicorn('Unihorse');
// 因此可以認定被註記為父類別的變數可以指派子類別的物件 —— 在原生 JS 裡的詮釋下 —— 它們隸屬於同一個原型鍊（Prototype Chain）下的產物。
AUnicorn.punk();
// Unihorse.punk() ! 雖然是Unicorn，但繼承Horse的屬性，Horse沒辦法吐口水
// let Horicorn:Unicorn = new Horse('Horicorn',horseColor.Rainbow,'Unicron') ! 如果是在父類別建構出來的物件 —— 手動對該物件新增屬性或方法就會破壞掉物件的完整性
var Stallion = /** @class */ (function (_super) {
    __extends(Stallion, _super);
    function Stallion(name) {
        return _super.call(this, name, horseColor.Brown, 'Stallion') || this;
    }
    return Stallion;
}(Horse));
var shouldBeStallion = new Horse('Stall', horseColor.Brown, 'Stallion');
// 假設宣告某類別 C，另外再宣告 C_Inherit 為繼承 C 的子類別，則：
// A. 子類別 C_Inheirt的型別推論機制跟普通類別的型別機制一模一樣（查看本篇重點 2）
// B. 若變數 A 被註記之型別為父類別 C，A 除了可被指派 C 類別建構出來的物件外，子類別 C_Inherit 建構出來的物件也可以被指派到 A
// C. 若變數 B 被註記之型別為子類別 C_Inherit —— 在 C_Inherit 繼承父類別 C 的過程中，並未額外定義 C 本身沒有的成員的條件下，父類別 C 所建構出來的東西可以被指派到變數 B
// 定義兩個名稱不同內容完全相同的類別
var A = /** @class */ (function () {
    function A(prop) {
        this.prop = prop;
    }
    A.prototype.publicMethod = function () {
        return this.prop;
    };
    return A;
}());
var B = /** @class */ (function () {
    function B(prop) {
        this.prop = prop;
    }
    B.prototype.publicMethod = function () {
        return this.prop;
    };
    return B;
}());
var someObj = new B('hello');
// 局然通過!!??
var C = /** @class */ (function () {
    function C(prop, privateProp) {
        this.prop = prop;
        this.privateProp = privateProp;
    }
    C.prototype.publicMethod = function () {
        return this.prop;
    };
    C.prototype.privateMethod = function () {
        return this.prop;
    };
    return C;
}());
var D = /** @class */ (function () {
    function D(prop, privateProp) {
        this.prop = prop;
        this.privateProp = privateProp;
    }
    D.prototype.publicMethod = function () {
        return this.prop;
    };
    D.prototype.privateMethod = function () {
        return this.prop;
    };
    return D;
}());
// let anotherObj : C = new D('hello','there') ! private 模式下的成員會使得類別的使用形式被改變，因此不能夠等效於其他格式相同的類別呢！ 
