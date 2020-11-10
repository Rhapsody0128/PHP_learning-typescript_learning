"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MeleeAttack = /** @class */ (function () {
    function MeleeAttack() {
    }
    MeleeAttack.prototype.attack = function (self, target) {
        console.log(self.name + " strikes " + target.name + " with big Sword!");
    };
    return MeleeAttack;
}());
exports.default = MeleeAttack;
