"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MeleeAttack = /** @class */ (function () {
    function MeleeAttack() {
    }
    MeleeAttack.prototype.attack = function (self, target) {
        console.log(self.name + " stabs through " + target.name + " with his Sword!");
    };
    return MeleeAttack;
}());
exports.default = MeleeAttack;
