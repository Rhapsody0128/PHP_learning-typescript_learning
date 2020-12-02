"use strict";
// Identity 這個型別化名的宣告裡，有一個被稱為型別參數（Type Parameter）的東西 —— 也就是 Identity<T> 裡面的 T 這個東西。
var shouldBeNumber;
var correctDict = {
    wentToClub: true,
    playedMahjong: true
};
var wrongDict = {
    koreanIsFun: true,
};
var addition = function (p1, p2) {
    return p1 + p2;
};
var stringConcatenation = function (p1, p2) {
    return p1 + p2;
};
function IdentityFunc(something) {
    return something;
}
var isPositive = function (input) {
    return input > 0;
};
var anythingToString = function (input) {
    return input.toString();
};
// 宣告一個泛用的TypedArray類別
var TypedArray = /** @class */ (function () {
    function TypedArray(value) {
        this.value = value;
    }
    return TypedArray;
}());
// 用 typeScript 陣列型別方式表示陣列
var numericArray = [1, 2, 3];
// number[]等效於Array<number>
var anotherMumericArray = numericArray;
// 用 typeScript 泛用型別表示陣列
var stringArray = ['Hello', 'World'];
// Array<string> 等效於 string[]
var anotherStringArray = stringArray;
// 至少有name，但不一定要age和pet
var validPersonalInfo = {
    name: 'Gary',
    hasPet: false
};
// 多一個不相關的 key-value 就會被 TypeScript 瞧
var wrongPersonalInfo = {
    name: 'Gaet',
    age: 20
    // hasMotocycle:true ! 多出來的 key-value
};
// 但被冠上Require條件型別後TypeScript就會嚴格要求age和hasPet必須存在
// let incompletePersonalInfo:Required<personalInfo>={
//   name:'Gary',
//   age:20
// } ! 缺少 hasPet key-value
// 如果被冠上 Required 這個條件型別，內部的 PersonalInfo 介面會把所有的選用屬性轉成必要屬性
// 基礎泛用型別註記
// 泛用型別之參數有被指定的狀況
var numberArr = [1, 2, 3];
var C = /** @class */ (function () {
    function C() {
        return 15;
    }
    return C;
}());
var AA = 15;
var BB = {
    a: 15,
    b: 'asd',
    c: true
};
var CC = {
    a: 15,
    b: 15,
    c: 'aa',
    constructor: function (a) {
        return a;
    }
};
console.log(CC);
var stringDict = {
    message: 'Hello World',
    language: 'TypeScript'
};
var booleanDict = {
    hasPet: false,
    hasMotocycle: true
};
// 單純的原始型別陣列
var numberPrimitiveArr = [1, 2, 3];
var stringPrimitiveArr = ['Hello', 'World'];
// 原始型別復合的陣列 => 照樣府和原始型別 union 的範疇
var numberOrStringPrimitiveArr = [1, "2", 3];
// 合理用法:
var onlyNumberArr = [1, 3, 5];
var onlyStringArr = ['56', '1651'];
// 違法使用行為:
// let invalidPrimitiveUnionArr:TypedPrinitiveArray<number|string>=[1,"3",5] ! number | string 是不能被 TypedPrimitiveArray 混用狀態
// 條件型別（Conditional Type）針對 union 過後的複合型別具有分配性質（Distributive Property），跟數學上的分配律很像。
// 泛用函式
// 宣告一個名為traverseElements的泛用函式
function traverseElements(values, callback) {
    for (var i = 0; i < values.length; i++) {
        callback(values[i], i);
    }
}
// 宣告一個數字陣列型別符合Array<number>
var numberArrayInput = [2, 3, 4, 8];
// 一個函示負責將數字陣列裡的值
var traverseCallBack = function (el, index) {
    console.log("Index " + index + " - Value " + el);
};
// 可以合併簡化為
traverseElements([2, 3, 4, 8], function (el, index) {
    console.log("Index " + index + " - Value " + el);
});
// 再簡化...
traverseElements([2, 3, 4, 8], function (el, index) {
    console.log("Index " + index + " - Value " + el);
});
