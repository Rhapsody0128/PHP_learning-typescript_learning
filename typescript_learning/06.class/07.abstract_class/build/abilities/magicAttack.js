"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MagicAttack = /** @class */ (function () {
    function MagicAttack() {
    }
    MagicAttack.prototype.attack = function (self, target) {
        console.log(self.name + " casts magic and pierces throgh " + target.name + "!");
    };
    return MagicAttack;
}());
exports.default = MagicAttack;
