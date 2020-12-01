var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
// declare const $:any ! 正常所有定義檔會額外放而不是放在主檔
// 有 declare 跟沒 declare 的差別在於，儘管 declare 的變數沒有指派任何東西進去，TypeScript 依然認定為該會由某個開發者不需要知道的地方提供出來，而這裡指的某個地方就可能存在於外來套件模組等等。
define("index", ["require", "exports", "jquery"], function (require, exports, jquery_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    jquery_1 = __importDefault(jquery_1);
    jquery_1.default(document).ready(function () {
        var $btn = jquery_1.default('#main-btn');
        var $count = jquery_1.default('#count');
        var count = 0;
        $btn.click(function () {
            console.log('object');
            count++;
            $count.text(count);
        });
    });
});
