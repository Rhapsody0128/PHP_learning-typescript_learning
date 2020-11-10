"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var stabAttack_1 = __importDefault(require("../abilities/stabAttack"));
var BasicSword = /** @class */ (function () {
    function BasicSword() {
        this.name = 'Dagger';
        this.availableRoles = [];
        this.attackStrategy = new stabAttack_1.default;
        // 藉由attackStrategy參考點呼叫attack方法:
        // 由於本類別不是Character，因此必須傳遞兩個分別代表主角
        // 本身以及被攻擊對象的Character物件來實現攻擊功能
    }
    BasicSword.prototype.switchAttackStrategy = function (type) {
        this.attackStrategy = type;
    };
    BasicSword.prototype.attack = function (self, target) {
        this.attackStrategy.attack(self, target);
    };
    return BasicSword;
}());
exports.default = BasicSword;
