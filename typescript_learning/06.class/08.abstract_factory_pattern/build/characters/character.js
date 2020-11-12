"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var weapon_1 = __importDefault(require("../weaopns/weapon"));
var armour_1 = __importDefault(require("../armours/armour"));
var Character = /** @class */ (function () {
    function Character(name, role, 
    // private attackRef:Attack
    // 新增一個針對Attack功能的參考成員
    // 不需要新增attackRef，因為攻擊方式由武器決定
    weaponRef, armourRef) {
        this.name = name;
        this.role = role;
        this.weaponRef = weaponRef;
        this.armourRef = armourRef;
    }
    Character.prototype.introduce = function () {
        console.log("\n  Hi, My name is " + this.name + ", I'm " + this.role + "\n    ");
    };
    Character.prototype.equip = function (equipment) {
        var roles = equipment.availableRoles;
        // 屬性賦值語法
        // const { a: aa, b: bb } = { a: 5, b: 10 } 
        // //a = 5, b=10
        if (roles.length === 0 || roles.indexOf(this.role) !== -1) {
            if (equipment instanceof weapon_1.default) {
                this.weaponRef = equipment;
            }
            else if (equipment instanceof armour_1.default) {
                this.armourRef = equipment;
            }
        }
        else {
            throw new Error(this.role + " cannot equip " + equipment.name + " !");
        }
        console.log("\n    " + this.name + " has equipped a " + equipment.type + " - " + equipment.name + "\n    ");
    };
    Character.prototype.attack = function (target) {
        this.weaponRef.attack(this, target);
    };
    return Character;
}());
exports.default = Character;
