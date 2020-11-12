"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var basicSword_1 = __importDefault(require("../weaopns/basicSword"));
var basicArmour_1 = __importDefault(require("../armours/basicArmour"));
var SwordsmanEquipmentFactory = /** @class */ (function () {
    function SwordsmanEquipmentFactory() {
    }
    SwordsmanEquipmentFactory.prototype.createWeapon = function () {
        return new basicSword_1.default;
    };
    SwordsmanEquipmentFactory.prototype.createArmour = function () {
        return new basicArmour_1.default;
    };
    return SwordsmanEquipmentFactory;
}());
exports.default = SwordsmanEquipmentFactory;
