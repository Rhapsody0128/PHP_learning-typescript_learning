"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var role_1 = __importDefault(require("./role"));
var character_1 = __importDefault(require("./character"));
// import MeleeAttack from '../abilities/meleeAttack';
// import BasicWand from '../weaopns/basicWand';
var warlockEquipmentFactory_1 = __importDefault(require("../equipments/warlockEquipmentFactory"));
var Swordsman = /** @class */ (function (_super) {
    __extends(Swordsman, _super);
    function Swordsman(name) {
        var _this = this;
        var WEF = new warlockEquipmentFactory_1.default;
        _this = _super.call(this, name, role_1.default.Swordsman, WEF.createWeapon(), WEF.createArmour()) || this;
        return _this;
    }
    return Swordsman;
}(character_1.default));
exports.default = Swordsman;
