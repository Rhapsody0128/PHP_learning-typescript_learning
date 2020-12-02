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
// 泛用類別宣告
var C = /** @class */ (function () {
    function C(memberProp) {
        this.memberProp = memberProp;
    }
    // 名為 memberProp 的成員變數，對應型別為 C 所宣告出的型別參數 T
    C.prototype.memberFunc = function () {
        return this.memberProp;
    };
    Object.defineProperty(C.prototype, "value", {
        // memberFunc 則是輸出 memberProp 的值
        get: function () {
            return this.memberProp;
        },
        set: function (input) {
            this.memberProp = input;
        },
        enumerable: false,
        configurable: true
    });
    return C;
}());
// 1.不註記在變數上，建立物件時顯性填入型別參數
var instanceOfC1 = new C(15);
console.log(instanceOfC1.memberProp, instanceOfC1.memberFunc(), instanceOfC1.value = 15, instanceOfC1.value);
// 2.註記載變數上，建立物件時不住記載類別化名旁的型別參數
var instanceOfC2 = new C(15);
console.log(instanceOfC2.memberProp, instanceOfC2.memberFunc(), instanceOfC2.value = 15, instanceOfC2.value);
// 3.不註記在變數上，但指派建構之物件時，你甚至不需要填入型別參數在建構子函式上，但仍可以推論出型別參數
var instanceOfC3 = new C(15);
console.log(instanceOfC3.memberProp, instanceOfC3.memberFunc(), instanceOfC3.value = 15, instanceOfC3.value);
// 子類別繼承父類別，且父親別為泛用類別的狀態
// D 繼承 C<T>
// class D extends C<T>{} ! 
// 首先，D 本身沒有型別參數，因此它不是泛用類別，但是它繼承了 C —— 不過 D 必須要確定你繼承的 C 對應的確切型別，這概念就很像是你要註記一個特定型別給一個特定變數 —— 因此筆者再次重申，前一節的重點 1 已經講過：如果某變數必須註記某個泛用型別，除非該泛型的型別參數有預設值，否則缺少型別參數對應的型別值就會出現錯誤警告。
// 頂多以 D 子類別為例，這一次 D 因為想要直接繼承某個類別，它也必須很確定它到底要繼承的確切型別是什麼 —— 也就是說，如果你選擇忽略類別 C 之 T 型別參數對應的型別值也會被 TypeScript 警告。
// 所以要改成:
var D = /** @class */ (function (_super) {
    __extends(D, _super);
    function D() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return D;
}(C));
// E<T> 繼承 C<T>
var E = /** @class */ (function (_super) {
    __extends(E, _super);
    function E() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return E;
}(C));
// 另外，E<T> 由於本身就是泛用類別的宣告，因此它有型別參數 T，而且它還可以將它的型別參數代入到它要繼承的 C 類別的型別參數部分。也就是說，想要建構 E<number> 這種型別的物件，就等同於模擬 E 繼承 C<number> 的情形。
var Cparent = /** @class */ (function () {
    function Cparent(member1, member2) {
        this.member1 = member1;
        this.member2 = member2;
    }
    return Cparent;
}());
