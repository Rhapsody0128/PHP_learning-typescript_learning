"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var stabAttack_1 = __importDefault(require("../abilities/stabAttack"));
var BasicWand = /** @class */ (function () {
    function BasicWand() {
        this.name = 'Basic Wand';
        this.attackStrategy = new stabAttack_1.default();
        this.availableRole = [];
    }
    return BasicWand;
}());
exports.default = BasicWand;
