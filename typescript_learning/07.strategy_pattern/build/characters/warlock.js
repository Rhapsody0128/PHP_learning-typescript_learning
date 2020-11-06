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
var magicAttack_1 = __importDefault(require("../abilities/magicAttack"));
var Swordsman = /** @class */ (function (_super) {
    __extends(Swordsman, _super);
    function Swordsman(name) {
        return _super.call(this, name, role_1.default.Warlock, new magicAttack_1.default) || this;
    }
    return Swordsman;
}(character_1.default));
exports.default = Swordsman;
