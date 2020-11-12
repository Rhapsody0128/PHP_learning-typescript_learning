"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var basicWand_1 = __importDefault(require("../weaopns/basicWand"));
var basicRobe_1 = __importDefault(require("../armours/basicRobe"));
var warlockEquipmentFactory = /** @class */ (function () {
    function warlockEquipmentFactory() {
    }
    warlockEquipmentFactory.prototype.createWeapon = function () {
        return new basicWand_1.default;
    };
    warlockEquipmentFactory.prototype.createArmour = function () {
        return new basicRobe_1.default;
    };
    return warlockEquipmentFactory;
}());
exports.default = warlockEquipmentFactory;
