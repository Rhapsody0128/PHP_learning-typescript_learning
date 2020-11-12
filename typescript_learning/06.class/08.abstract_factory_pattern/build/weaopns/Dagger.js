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
var weapon_1 = __importDefault(require("./weapon"));
var stabAttack_1 = __importDefault(require("../abilities/stabAttack"));
var Dagger = /** @class */ (function (_super) {
    __extends(Dagger, _super);
    function Dagger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Dagger';
        _this.availableRoles = [];
        _this.attackStrategy = new stabAttack_1.default;
        return _this;
        // 藉由attackStrategy參考點呼叫attack方法:
        // 由於本類別不是Character，因此必須傳遞兩個分別代表主角
        // 本身以及被攻擊對象的Character物件來實現攻擊功能
    }
    Dagger.prototype.switchAttackStrategy = function (type) {
        this.attackStrategy = type;
    };
    Dagger.prototype.attack = function (self, target) {
        this.attackStrategy.attack(self, target);
    };
    return Dagger;
}(weapon_1.default));
exports.default = Dagger;
