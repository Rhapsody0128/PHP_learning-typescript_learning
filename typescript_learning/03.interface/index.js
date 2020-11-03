"use strict";
// const implementAddition:AddOperation = {
//   addition(p1:string,p2:string){
//     return parseInt(p1) + parseInt(p2)
//   },
//   addition(p1:number,p2:number){
//     return p1+ p2
//   }
// }
var implementAddition = {
    // if...else... 判斷敘述後，儘管讓參數 p1 與 p2 可以為 number 或 string，但是參數的組合也有可能是 p1 與 p2 分別為 p1: number; p2: string 或 p1: string; p2: number —— 後兩種組合狀況會導致直接跳脫函式，並回傳 undefined，但這不符合函式型別輸出的規定狀況。（除非輸出改成 number | void）
    addition: function (p1, p2) {
        if (typeof p1 == 'number' && typeof p2 == 'number') {
            return p1 + p2;
        }
        else if (typeof p1 == 'string' && typeof p2 == 'string') {
            return parseInt(p1) + parseInt(p2);
        }
        throw new Error("Parameter `p1`and`p2`should only accept both`number`type or `string`type.");
    }
};
;
var asd = {
    a: 'aa',
    b: 1801,
    c: true
};
// ---type 和 interface定義型態差別之我論---
// type(類別)屬於靜態類別，來定義固定式條目，事後盡量不要做修改的，可以使用列舉(Enum)和元組(Tuple)，合併邏輯為new type = old + old
// interface(介面)屬於動態類別，可以定義浮動式條目，事後可以修改和合併，無法使用列舉和元組，但可以用擴充(Extends)，合併邏輯為new interface merge (old, old)
