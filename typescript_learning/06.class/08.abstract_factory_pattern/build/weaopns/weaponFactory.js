"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var weapons_1 = __importDefault(require("./weapons"));
var weapon_1 = __importDefault(require("./weapon"));
var basicSword_1 = __importDefault(require("./basicSword"));
var basicWand_1 = __importDefault(require("./basicWand"));
var dagger_1 = __importDefault(require("./dagger"));
var WeaponFactory = /** @class */ (function () {
    function WeaponFactory() {
    }
    WeaponFactory.prototype.createWeapon = function (type) {
        switch (type) {
            case weapons_1.default.BasicSword: return new basicSword_1.default();
            case weapons_1.default.BasicWand: return new basicWand_1.default();
            case weapons_1.default.Dagger: return new dagger_1.default();
            default: throw new Error(weapon_1.default[type] + " isn't registered!");
        }
    };
    return WeaponFactory;
}());
exports.default = WeaponFactory;
