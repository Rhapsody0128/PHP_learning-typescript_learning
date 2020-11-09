"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Character = /** @class */ (function () {
    function Character(name, role, 
    // private attackRef:Attack
    // 新增一個針對Attack功能的參考成員
    weaponRef
    // 不需要新增attackRef，因為攻擊方式由武器決定
    ) {
        this.name = name;
        this.role = role;
        this.weaponRef = weaponRef;
        this.attackRef = this.weaponRef.attackStrategy;
    }
    Character.prototype.introduce = function () {
        console.log("\n  Hi, My name is " + this.name + ", I'm " + this.role + "\n    ");
    };
    Character.prototype.attack = function (target) {
        this.attackRef.attack(this, target);
    };
    Character.prototype.switchAttackStrategy = function (type) {
        this.attackRef = type;
    };
    Character.prototype.equip = function (weapon) {
        // const availableRoles:Role[]  = weapon.availableRole
        var availableRoles = weapon.availableRole;
        if (availableRoles.length === 0 ||
            availableRoles.indexOf(this.role) !== -1) {
            console.log(this.name + " has equipped " + weapon.name + "!");
            this.weaponRef = weapon;
            this.attackRef = this.weaponRef.attackStrategy;
        }
        else {
            throw new Error(this.role + " cannot equip " + weapon.name);
        }
    };
    return Character;
}());
exports.default = Character;
