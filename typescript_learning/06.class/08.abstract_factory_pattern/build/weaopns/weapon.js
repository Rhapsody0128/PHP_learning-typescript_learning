"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var meleeAttack_1 = __importDefault(require("../abilities/meleeAttack"));
var equipments_1 = __importDefault(require("../equipments/equipments"));
var Weapon = /** @class */ (function () {
    function Weapon() {
        this.type = equipments_1.default.Weapon;
        this.attackStrategy = new meleeAttack_1.default;
    }
    Weapon.prototype.switchAttackStrategy = function (type) {
        this.attackStrategy = type;
    };
    Weapon.prototype.attack = function (self, target) {
        this.attackStrategy.attack(self, target);
    };
    return Weapon;
}());
exports.default = Weapon;
