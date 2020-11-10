"use strict";
// node build/index.js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var swordsman_1 = __importDefault(require("./characters/swordsman"));
var warlock_1 = __importDefault(require("./characters/warlock"));
var Dagger_1 = __importDefault(require("./weaopns/Dagger"));
var basicSword_js_1 = __importDefault(require("./weaopns/basicSword.js"));
var stabAttack_js_1 = __importDefault(require("./abilities/stabAttack.js"));
var Gary = new swordsman_1.default('Gary');
var Jack = new warlock_1.default('Jack');
Gary.introduce();
Jack.introduce();
// MeleeAttack
Gary.attack(Jack);
Jack.attack(Gary);
Gary.equip(new Dagger_1.default);
Gary.attack(Jack);
var swordUsingStab = new basicSword_js_1.default;
swordUsingStab.switchAttackStrategy(new stabAttack_js_1.default());
var Ame = new swordsman_1.default('Ame');
Ame.equip(swordUsingStab);
Ame.attack(Gary);
