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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Role;
(function (Role) {
    Role["Swordsman"] = "Swordsman";
    Role["Warlock"] = "Warlock";
    Role["Highwaynan"] = "Highwaynan";
    Role["BountyHunter"] = "Bounty Hunter";
    Role["Monster"] = "Monster";
})(Role || (Role = {}));
var Character = /** @class */ (function () {
    function Character(name, role) {
        this.name = name;
        this.role = role;
        this.health = 50;
        this.mana = 10;
        this.strength = 10;
        this.defense = 5;
    }
    Character.prototype.attack = function (target) {
        var verb;
        switch (this.role) {
            case Role.Swordsman:
                verb = 'attacking';
                break;
            case Role.Warlock:
                verb = 'cursing';
                break;
            case Role.Highwaynan:
                verb = 'ambushing';
                break;
            case Role.BountyHunter:
                verb = 'threatening';
                break;
            case Role.Monster:
                verb = 'crab';
                break;
            default: throw new Error(this.role + " didn't exist");
        }
        console.log(this.name + " is " + verb + " " + target.name);
    };
    return Character;
}());
var Monster = /** @class */ (function () {
    function Monster(name) {
        this.name = name;
        this.role = Role.Monster;
    }
    Monster.prototype.attack = function (target) {
        console.log(this.name + " is attacking the " + target.role + "-" + target.name);
    };
    return Monster;
}());
var Gary = new Character('Gary', Role.BountyHunter);
var Jack = new Character('Jack', Role.Swordsman);
Gary.attack(Jack);
Jack.attack(Gary);
// 若已宣告類別 C 與介面 I，其中 C 想要對 I 進行綁定的動作，必須使用 implements 關鍵字。
// 一但 C 綁定了 I，則類別 C 必須要實踐出介面 I 裡面的所有規格成員。
// 一個子類別一次只能繼承一個父類別；然而，一個類別可以跟多個介面進行綁定。
var caracter = new Character('Sam', Role.Highwaynan);
var certainlyACharacter = new Character('Kim', Role.Swordsman);
caracter.name;
caracter.health;
certainlyACharacter.name;
// certainlyACharacter.health ! 註記為ICharacter 但是Icharacter沒有health屬性
var aHumanCharacter = new Character('Gary', Role.Highwaynan);
var aMonster = new Monster('Slime');
aHumanCharacter.attack(aMonster);
aMonster.attack(Gary);
var BountyHunter = /** @class */ (function (_super) {
    __extends(BountyHunter, _super);
    function BountyHunter(name) {
        var _this = _super.call(this, name, Role.BountyHunter) || this;
        _this.hostages = [];
        return _this;
    }
    BountyHunter.prototype.capture = function (target, successRate) {
        var randomNumber = Math.random();
        var message;
        var targerTilte = target.name + " the " + target.role;
        if (randomNumber > (1 - successRate)) {
            this.hostages = __spreadArrays(this.hostages, [target]);
            message = this.name + " has captured " + targerTilte;
        }
        else {
            message = this.name + " failed to capture " + targerTilte;
        }
        console.log(message);
    };
    BountyHunter.prototype.sellHostages = function () {
        var totalPrice = this.hostages.length * 1000;
        var hostagesInfo = this.hostages.map(function (hostage) { return hostage.name + " the " + hostage.role; }).join('\n\b\b');
        console.log(this.name + " sells all the hostages, including:\n    " + hostagesInfo + "\n\n    Receive Gold: " + totalPrice + "\n    ");
        this.hostages = [];
    };
    return BountyHunter;
}(Character));
var Gon = new BountyHunter('Gon');
var JunkMonster = new Character('JunkMonster', Role.Monster);
var JunkB = new Character('JunkB', Role.Highwaynan);
var JunkC = new Character('JunkC', Role.Highwaynan);
Gon.capture(JunkMonster, 1);
Gon.capture(JunkB, 0.5);
Gon.capture(JunkC, 0.1);
Gon.attack(Gary);
Gon.capture(Gary, 0.4);
Gon.capture(Jack, 0.8);
JunkMonster.attack(Jack);
JunkB.attack(Gary);
Gon.sellHostages();
// let unknowPerson:ICharacter = new BountyHunter('chu');
// unknowPerson.capture(Gary,0.4) ! unknowPerson 被註記為 ICharacter基本型的沒辦法使用獵人的技能
