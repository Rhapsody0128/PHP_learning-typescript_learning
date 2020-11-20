"use strict";
var c = 'aa';
// const $btn =<HTMLButtonElement> (document.getElementById('click-me-btn'))
// const $counter =<HTMLSpanElement> document.getElementById('count')
var $btn = document.getElementById('click-me-btn');
var $counter = document.getElementById('count');
// 使用Tpye Guard
// 這樣的寫法也比較合理的理由是：如果對 A | null 進行強行註記為 A 這個型別的話，就等同於你忽略了它可能是 null 的機率，造成開發過程中產出 Bug 的風險 —— 通常在這裡會變成 null 的情形，不外乎可能是元素的 ID 打錯字或者是單純 getElementById 裡面的元素 ID 打錯字，所以要讓 TypeScript 自動幫我們監測這些問題的存在。
if ($btn === null || $counter === null) {
    throw new Error("Element shouldn\'t be null");
}
var count = 0;
$btn.addEventListener('click', function () {
    count++;
    console.log('You click me !');
    // debugger
    // 原生JS也有的功能，每一次按到按鈕會在 debugger 註記的地方暫停執行，並且可以檢視此時的變數狀況！
    $counter.innerText = count.toString();
});
var a;
// let b = a
// * tsc --strictNullChecks false
// 如果將 strickNullChecks 設定為 false，則會讓 Nullable Types 視為任何型別可以出現的一種形式
// function summation(p1,p2){
//   return p1 + p2
// }
// * tsc --noImplicitAny false
// 如果將 noImplicitAny 設定為 false，則會讓 Nullable Types 視為任何型別可以出現的一種形式
//# sourceMappingURL=build.js.map