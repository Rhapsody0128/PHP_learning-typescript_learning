"use strict";
// node build/index.js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var swordsman_1 = __importDefault(require("./characters/swordsman"));
var warlock_1 = __importDefault(require("./characters/warlock"));
// 有工廠就不需要個別載入了
// import Dagger from './weaopns/dagger';
// import BasicWand from './weaopns/basicWand';
// import BasicSword from './weaopns/basicSword.js';
var weapons_1 = __importDefault(require("./weaopns/weapons"));
var weaponFactory_1 = __importDefault(require("./weaopns/weaponFactory"));
var weaponFactory = new weaponFactory_1.default();
var Gary = new swordsman_1.default('Gary');
var Jack = new warlock_1.default('Jack');
Jack.attack(Gary);
var dagger = weaponFactory.createWeapon(weapons_1.default.BasicSword);
Gary.equip(dagger);
Gary.attack(Gary);
