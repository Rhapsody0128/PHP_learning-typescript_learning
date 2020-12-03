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
var Cchild1 = /** @class */ (function (_super) {
    __extends(Cchild1, _super);
    function Cchild1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cchild1;
}(Cparent));
var Cchild2 = /** @class */ (function (_super) {
    __extends(Cchild2, _super);
    function Cchild2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cchild2;
}(Cparent));
var Cchild3 = /** @class */ (function (_super) {
    __extends(Cchild3, _super);
    function Cchild3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cchild3;
}(Cparent));
// class MyLinkedList implements LinkedListSec<T>{} ! 單純implements 會被 TS 警告內容物不足
// class MyGenericLinkedList<T> implements LinkedListSec<T>{} ! 單純implements 會被 TS 警告內容物不足
var GenericLinkedListNode = /** @class */ (function () {
    function GenericLinkedListNode(value) {
        this.value = value;
        this.next = null;
    }
    return GenericLinkedListNode;
}());
var GenericLinkedList = /** @class */ (function () {
    function GenericLinkedList() {
        this.head = null;
    }
    GenericLinkedList.prototype.length = function () {
        if (this.head === null)
            return 0;
        var count = 0;
        var currentNode = this.head;
        while (currentNode !== null) {
            currentNode = currentNode.next;
            // 注意上面的currentNode型別不再是上面宣稱的LinkedListNodeSec<T>|null，而是LinkedListNodeSec<T>，因為在while的判斷已經把null篩選掉了，但currentNode.next有可能為null
            count++;
        }
        return count;
    };
    GenericLinkedList.prototype.at = function (index) {
        var length = this.length();
        // 如果長度小於index則無條件視為out of bound，直接丟出ERROR
        // index從0開始計算，跟陣列概念一樣:
        //  長度為0的鏈結串列index==0必丟出ERROR
        //  長度為3的鏈結串列index==2為最後一個值
        //  但3以上必丟出ERROR
        if (index >= length)
            throw new Error('Index out of bound');
        var currentIndex = 0;
        var currentNode = this.head;
        while (currentIndex !== index) {
            currentNode = currentNode.next;
            currentIndex++;
        }
        return currentNode;
    };
    GenericLinkedList.prototype.insert = function (index, value) {
        var length = this.length();
        var newNode = new GenericLinkedListNode(value);
        // 如果長度小於index就丟出錯誤
        if (length < index)
            throw new Error('Index out of bound');
        // 如果剛好等於index值，代表要插入新的節點
        else if (length === index) {
            if (index === 0) {
                this.head = newNode;
            }
            else {
                var node = this.at(index - 1);
                node.next = newNode;
            }
        }
        // 長度大於index值，就代表要從中插入新的LinkedListNode
        else {
            if (index === 0) {
                var originalHead = this.head;
                this.head = newNode;
                this.head.next = originalHead;
            }
            else {
                var prevNode = this.at(index - 1);
                var originalNode = prevNode.next;
                prevNode.next = newNode;
                newNode.next = originalNode;
            }
        }
    };
    GenericLinkedList.prototype.remove = function (index) {
        throw new Error("Method not implemented");
    };
    GenericLinkedList.prototype.getInfo = function () {
        var currentNode = this.head;
        var currentIndex = 0;
        while (currentNode !== null) {
            console.log("Index " + currentIndex + ":" + currentNode.value);
            currentNode = currentNode.next;
            currentIndex++;
        }
    };
    return GenericLinkedList;
}());
var l = new GenericLinkedList();
l.insert(0, 12);
l.insert(1, 56);
l.insert(2, 78);
l.insert(1, 34);
l.getInfo();
// 檢視鏈結串列中index=0~3的元素之值:
// 由於我們確定 l.at(index) where index = 0~3
// 100%絕對是LinkedListNode<number>，而非null，
// 因此採取顯性註記的動作
console.log(l.at(0).value);
console.log(l.at(1).value);
console.log(l.at(2).value);
console.log(l.at(3).value);
try {
    l.at(4);
}
catch (err) {
    console.log('Out of bound error caught');
}
// 判斷註記型別的時機，若型別部分你有 100% 信心認為是某特定型別，你應該選擇型別積極註記的動作，不需要擔心會不會造成型別壟斷的行為。
// 建立GenericLinkedList物件但不指派型別直到型別參數
var unspecifiedTypeParamLinkedList = new GenericLinkedList();
var specifiedTypeParamLinkedList = new GenericLinkedList();
