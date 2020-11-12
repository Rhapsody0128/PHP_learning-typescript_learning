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
var armour_1 = __importDefault(require("./armour"));
var role_1 = __importDefault(require("../characters/role"));
var BasicRobe = /** @class */ (function (_super) {
    __extends(BasicRobe, _super);
    function BasicRobe() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Basic Robe';
        _this.availableRoles = [
            role_1.default.Warlock
        ];
        return _this;
    }
    return BasicRobe;
}(armour_1.default));
exports.default = BasicRobe;
