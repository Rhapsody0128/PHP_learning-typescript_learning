"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var meleeAttack_1 = __importDefault(require("../abilities/meleeAttack"));
var role_1 = __importDefault(require("../characters/role"));
var BasicSword = /** @class */ (function () {
    function BasicSword() {
        this.name = 'Basic Sword';
        this.attackStrategy = new meleeAttack_1.default();
        this.availableRole = [role_1.default.Swordsman, role_1.default.Highwaynan];
    }
    return BasicSword;
}());
exports.default = BasicSword;
