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
var Fighter = /** @class */ (function () {
    function Fighter(name) {
        this.name = name;
        this.health = 100;
        this.stamina = 100;
    }
    return Fighter;
}());
var Mage = /** @class */ (function () {
    function Mage(name) {
        this.name = name;
        this.health = 100;
        this.mana = 100;
    }
    return Mage;
}());
var FighterCanFight = /** @class */ (function (_super) {
    __extends(FighterCanFight, _super);
    function FighterCanFight(name) {
        return _super.call(this, name) || this;
    }
    FighterCanFight.prototype.fight = function () {
        console.log(this.name + " slashes at the foe !");
        this.stamina--;
    };
    return FighterCanFight;
}(Fighter));
var MageCanCast = /** @class */ (function (_super) {
    __extends(MageCanCast, _super);
    function MageCanCast(name) {
        return _super.call(this, name) || this;
    }
    MageCanCast.prototype.cast = function (spell) {
        console.log(this.name + " casts " + spell + " !");
        this.mana--;
    };
    return MageCanCast;
}(Mage));
