"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Character = /** @class */ (function () {
    function Character(name, role, 
    // private attackRef:Attack
    // 新增一個針對Attack功能的參考成員
    // 不需要新增attackRef，因為攻擊方式由武器決定
    weaponRef) {
        this.name = name;
        this.role = role;
        this.weaponRef = weaponRef;
    }
    Character.prototype.introduce = function () {
        console.log("\n  Hi, My name is " + this.name + ", I'm " + this.role + "\n    ");
    };
    // public attack(target:Character){
    //   this.attackRef.attack(this,target);
    // }
    // public switchAttackStrategy(type:Attack){
    //   this.attackRef = type
    // }
    Character.prototype.equip = function (weapon) {
        var roles = weapon.availableRoles;
        if (roles.length === 0 || roles.indexOf(this.role) !== -1) {
            this.weaponRef = weapon;
        }
        else {
            throw new Error(this.role + " cannot equip " + weapon.name + " !");
        }
    };
    Character.prototype.attack = function (target) {
        this.weaponRef.attack(this, target);
    };
    return Character;
}());
exports.default = Character;
