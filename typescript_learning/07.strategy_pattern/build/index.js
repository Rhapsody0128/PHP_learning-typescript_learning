"use strict";
// 如果要在眾多類別中實踐近似但相異的行為，與其直接實踐（implement）出功能並使用一連串的敘述式進行演算法的切換，不如在父類別裡建立一個行為演算法的參考點（reference point），任何符合該參考點的演算法必須遵照某介面（interface）進行實踐的動作；父類別可以藉由在該參考點切換演算法，不需要經過一連串判斷流程，就可以達到功能相異的結果。
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var swordsman_1 = __importDefault(require("./characters/swordsman"));
var warlock_1 = __importDefault(require("./characters/warlock"));
var stabAttack_js_1 = __importDefault(require("./abilities/stabAttack.js"));
var basicSwords_1 = __importDefault(require("./weapons/basicSwords"));
var basicWand_1 = __importDefault(require("./weapons/basicWand"));
var dagger_1 = __importDefault(require("./weapons/dagger"));
var Gary = new swordsman_1.default('Gary');
var Jack = new warlock_1.default('Jack');
Gary.introduce();
Jack.introduce();
// MeleeAttack
Gary.attack(Jack);
Jack.attack(Gary);
Gary.switchAttackStrategy(new stabAttack_js_1.default());
Gary.attack(Jack);
Gary.equip(new basicSwords_1.default());
Gary.attack(Gary);
Jack.equip(new dagger_1.default());
Jack.attack(Gary);
try {
    Gary.equip(new basicWand_1.default());
}
catch (err) {
    console.log(err);
}
