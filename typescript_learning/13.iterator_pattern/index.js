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
// 上為陽春版迭代器介面-------------------------------------
// 下為陽春版迭代器實踐-------------------------------------
var NormalIterator = /** @class */ (function () {
    function NormalIterator(items) {
        this.items = items;
        this.currentItem = null;
        this.currentIndex = 0;
        this.currentItem = items[0];
    }
    NormalIterator.prototype.isDone = function () {
        return this.currentItem == null;
    };
    NormalIterator.prototype.next = function () {
        // 如果早就isDone，就拋出 Out of bound 相關的錯誤訊息
        if (this.isDone())
            throw new Error('Iterator out of bound.');
        // 正常迭代到下個元素
        this.currentIndex++;
        this.currentItem = this.items[this.currentIndex];
    };
    return NormalIterator;
}());
var MyArray = /** @class */ (function () {
    function MyArray(items) {
        this.items = items;
    }
    // 此為Factory Method，專門建立MyArray的迭代器
    MyArray.prototype.createIterator = function () {
        return new NormalIterator(this.items);
    };
    return MyArray;
}());
// 建立簡單聚合物
var aCollection = new MyArray([1, 2, 3, 4, 5]);
// 建立該聚合物的迭代器
var anIterator = aCollection.createIterator();
// 迴圈遍歷迭代器
while (!anIterator.isDone()) {
    console.log("Iterated value:" + anIterator.currentItem);
    anIterator.next();
}
// 如果硬要叫 next，就會觸發Out of bound 錯誤
try {
    anIterator.next();
}
catch (err) {
    console.log('Out of bound error caught!');
}
var GenericLinkedListNode = /** @class */ (function () {
    function GenericLinkedListNode(value) {
        this.value = value;
    }
    GenericLinkedListNode.prototype.next = function () { return null; };
    ;
    return GenericLinkedListNode;
}());
var GenericLinkedList = /** @class */ (function () {
    function GenericLinkedList() {
        this.head = null;
    }
    GenericLinkedList.prototype.length = function () { return 5; };
    GenericLinkedList.prototype.at = function (index) { return null; };
    GenericLinkedList.prototype.insert = function (index, value) { };
    GenericLinkedList.prototype.remove = function (index) { };
    GenericLinkedList.prototype.getInfo = function () { };
    ;
    return GenericLinkedList;
}());
var aList = new GenericLinkedList();
aList.insert(0, 123);
aList.insert(1, 123);
aList.insert(0, 123);
aList.insert(0, 123);
var currentNode = aList.head;
while (currentNode !== null) {
    console.log("Current node value : " + currentNode.value);
    currentNode = currentNode.next();
}
// 另一種寫法
var IterableLinkList = /** @class */ (function (_super) {
    __extends(IterableLinkList, _super);
    function IterableLinkList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IterableLinkList.prototype.createIterator = function () {
        var elements = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            elements.push(currentNode.value);
            currentNode = currentNode.next();
        }
        return new NormalIterator(elements);
    };
    return IterableLinkList;
}(GenericLinkedList));
function foreach(iter, callback) {
    while (!iter.isDone()) {
        callback(iter.currentItem);
        iter.next();
    }
}
var collection01 = new MyArray([1, 2, 3]);
var collection02 = new IterableLinkList();
collection02.insert(0, 1);
collection02.insert(1, 2);
collection02.insert(2, 3);
var iter1 = collection01.createIterator();
var iter2 = collection02.createIterator();
foreach(iter1, function (v) { return console.log("value from clollection1:" + v); });
foreach(iter2, function (v) { return console.log("value from clollection2:" + v); });
// BinaryTree加上迭代器的實作
var BinaryTree = /** @class */ (function () {
    function BinaryTree(root) {
        this.root = root;
    }
    // 宣告前序走訪成員方法
    BinaryTree.prototype.preorderTraversal = function (callback) {
        this.preorderRecursive(this.root, callback);
    };
    BinaryTree.prototype.preorderRecursive = function (node, callback) {
        callback(node);
        if (node.leftNode !== null) {
            this.preorderRecursive(node.leftNode, callback);
        }
        if (node.rightNode !== null) {
            this.preorderRecursive(node.rightNode, callback);
        }
    };
    BinaryTree.prototype.createIterator = function () {
        var elements = [];
        this.preorderTraversal(function (node) {
            elements.push(node.value);
        });
        return new NormalIterator(elements);
    };
    return BinaryTree;
}());
var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
        this.leftNode = null;
        this.rightNode = null;
        this.parent = null;
    }
    Object.defineProperty(TreeNode.prototype, "left", {
        set: function (value) {
            this.leftNode = new TreeNode(value);
            this.leftNode.parent = this;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "right", {
        set: function (value) {
            this.rightNode = new TreeNode(value);
            this.rightNode.parent = this;
        },
        enumerable: false,
        configurable: true
    });
    return TreeNode;
}());
// 建構樹的根結點外，將該節點設為二元樹的點
var root = new TreeNode(1);
var aBTree = new BinaryTree(root);
root.left = 2;
root.leftNode.left = 3;
root.leftNode.right = 4;
root.leftNode.rightNode.left = 5;
root.right = 6;
root.rightNode.left = 7;
root.rightNode.leftNode.left = 8;
root.rightNode.leftNode.right = 9;
root.rightNode.leftNode.rightNode.left = 10;
// *出產的二元樹狀圖如附圖
// 一般使用手法
console.log('Normal Usage;');
var valueCumulation1 = [];
aBTree.preorderTraversal(function (n) { return valueCumulation1.push(n.value); });
console.log(valueCumulation1);
// 多型尋訪下的手法
console.log("polymorphic Iteration");
var valueCumulation2 = [];
var aBTreeIter = aBTree.createIterator();
foreach(aBTreeIter, function (v) { return valueCumulation2.push(v); });
console.log(valueCumulation2);
// MyArray<T>、IterableLinkedList<T> 以及 BinaryTree<T> 這三種看似不可能用同個介面巡訪的方式 —— 藉由迭代器模式統一下來。
