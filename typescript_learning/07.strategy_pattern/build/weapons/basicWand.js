"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var magicAttack_1 = __importDefault(require("../abilities/magicAttack"));
var role_1 = __importDefault(require("../characters/role"));
var BasicWand = /** @class */ (function () {
    function BasicWand() {
        this.name = 'Basic Wand';
        this.attackStrategy = new magicAttack_1.default();
        this.availableRole = [role_1.default.Warlock];
    }
    return BasicWand;
}());
exports.default = BasicWand;
