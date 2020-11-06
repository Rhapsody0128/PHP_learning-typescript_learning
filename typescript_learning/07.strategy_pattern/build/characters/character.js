"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Character = /** @class */ (function () {
    function Character(name, role, attackRef
    // 新增一個針對Attack功能的參考成員
    ) {
        this.name = name;
        this.role = role;
        this.attackRef = attackRef;
    }
    Character.prototype.introduce = function () {
        console.log("\n  Hi, My name is " + this.name + ", I'm " + this.role + "\n    ");
    };
    Character.prototype.attack = function (target) {
        this.attackRef.attack(this, target);
    };
    return Character;
}());
exports.default = Character;
